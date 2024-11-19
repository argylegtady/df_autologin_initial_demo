import React, { useState, useEffect } from "react";
import verticalsData from "./verticals.json";
import { sendToContentScript, sendToBackground } from "@plasmohq/messaging";
import "./style.css";

interface TabConfig {
  name: string;
  visible: boolean;
}

interface UserData {
  userName: string;
  name: string;
  verticals: string[];
  country?: string;
  picture?: string;
  purpose?: string;
  defaultUserRole?: string;
  persona?: string;
  reportsTo?: string;
  [key: string]: any;
}

function IndexPopup() {
  const [activeTab, setActiveTab] = useState(1); 
  const [userDictionary, setUserDictionary] = useState<{ [key: string]: UserData }>({});
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [multiSelectFilters, setMultiSelectFilters] = useState<{ [key: string]: Set<string> }>({
    verticals: new Set(),
    country: new Set(),
    persona: new Set(),
  });
  const [filterField, setFilterField] = useState<string>("");
  const [dynamicFilterValues, setDynamicFilterValues] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");  
  const [txFilter, setTxFilter] = useState<number | string>("");
  const [txHash, setTxHash] = useState<string>("");

  const urls = ["https://example1.com", "https://example2.com", "https://example3.com"];
  const tabListeners: { [url: string]: any } = {};

  useEffect(() => {
    const processedData: { [key: string]: UserData } = {};
    verticalsData.forEach((entry: any) => {
      const userName = entry["UserName"];
      const name = entry["Name"];
      const vertical = entry["Vertical"];
      let purpose = entry["Purpose, User Role & Access Details"] || "";
      let defaultUserRole = "";
  
      if (name?.includes(":")) {
        return;
      }
  
      if (purpose.includes("Default User Role:")) {
        const splitParts = purpose.split("Default User Role:");
        purpose = splitParts[0].trim();
        defaultUserRole = splitParts[1]?.trim() || "";
      }
  
      if (purpose.startsWith("Purpose:")) {
        purpose = purpose.replace("Purpose:", "").trim();
      }
  
      const countryMatch = vertical?.match(/\(([^)]+)\)$/);
      const country = countryMatch ? countryMatch[1] : undefined;
  
      if (userName) {
        processedData[userName] = {
          userName,
          name: name || "Unknown",
          verticals: [vertical],
          country,
          picture: entry["Picture"] ? `./assets/${entry["Picture"]}` : undefined,
          purpose,
          defaultUserRole,
          persona: entry["Persona"],
          reportsTo: entry["Reports To"],
          ...entry,
        };
      }
    });
  
    setUserDictionary(processedData);
    setFilteredUsers(Object.values(processedData)); 
  }, []);
  

  useEffect(() => {
    if (activeTab === 1) {
      applyFilters();
    }
  }, [activeTab]);

  const getSelectedUserDetails = () => {
    return Array.from(selectedUsers).map((userName) => {
      const user = filteredUsers.find((user) => user.userName === userName);
      return user ? `${user.name} - ${user.country || "N/A"} - ${user.persona || "N/A"}` : null;
    });
  };

  const toggleUserSelection = (userName: string) => {
    setSelectedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userName)) {
        newSet.delete(userName);
      } else {
        newSet.add(userName);
      }
      return newSet;
    });
  };

  const applyFilters = () => {
    const filtered = Object.values(userDictionary).filter((user) => {
      let matches = true;

      if (multiSelectFilters.verticals.size > 0) {
        matches =
          matches &&
          Array.from(multiSelectFilters.verticals).some((filterValue) =>
            user.verticals.some((vertical) => vertical.includes(filterValue))
          );
      }

      if (multiSelectFilters.country.size > 0) {
        matches =
          matches &&
          multiSelectFilters.country.has(user.country || "");
      }

      if (multiSelectFilters.persona.size > 0) {
        matches =
          matches &&
          multiSelectFilters.persona.has(user.persona || "");
      }

      if (searchQuery) {
        matches =
          matches &&
          (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.persona?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.verticals.some((vertical) => vertical.toLowerCase().includes(searchQuery.toLowerCase()))
          );
      }

      return matches;
    });

    setFilteredUsers(filtered);
  };

  const generateDynamicFilterValues = (field: string) => {
    const uniqueValues = new Set<string>();
    Object.values(userDictionary).forEach((user) => {
      if (field === "verticals") {
        user.verticals.forEach((vertical) => uniqueValues.add(vertical));
      } else if (user[field]) {
        uniqueValues.add(user[field]!);
      }
    });
    setDynamicFilterValues(Array.from(uniqueValues));
  };

  const toggleFilterValue = (field: string, value: string) => {
    setMultiSelectFilters((prev) => {
      const newSet = new Set(prev[field]);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return { ...prev, [field]: newSet };
    });

    applyFilters();
  };


  const launchTabs = () => {
    Array.from(selectedUsers).forEach((userName) => {
      const user = userDictionary[userName];
      if (user && user.persona) {
        chrome.tabs.create(
          {
            url: "https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx",
            active: false,
          },
          (tab) => {
            if (tab?.id) {
              try {
                chrome.scripting.executeScript({
                  target: { tabId: tab.id },
                  func: (personaTitle) => {
                    document.title = personaTitle;
                  },
                  args: [`${user.persona} - ${user.country} - ${user.name}`],
                });
              } catch (error) {
                console.error(`Failed to set title for ${user.persona}:`, error);
              }
            }
          }
        );
      }
    });
  };

  const openTabsSequentially = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      let currentIndex = 0;

      function openNextTab() {
        if (currentIndex >= urls.length) {
          resolve();
          return;
        }

        const currentUrl = urls[currentIndex];
        chrome.tabs.create({ url: currentUrl, active: false }, (tab) => {
          const listener = function listener(tabId: number, info: chrome.tabs.TabChangeInfo) {
            if (tabId === tab.id && info.status === "complete") {
              chrome.tabs.onUpdated.removeListener(listener);
              currentIndex++;
              openNextTab();
            }
          };

          tabListeners[currentUrl] = { tabId: tab?.id!, listener };
          chrome.tabs.onUpdated.addListener(listener);
        });
      }

      openNextTab();
    });
  };

  const sendTabListenersToBackground = async () => {
    try {
      await chrome.runtime.sendMessage({
        name: "tabListeners",
        body: tabListeners,
      });
    } catch (error) {
      console.error("Failed to send tabListeners to background script", error);
    }
  };

  const handleOpenAndSendTabs = () => {
    openTabsSequentially().then(() => sendTabListenersToBackground());
  };


  return (
    <div className="flex flex-col w-96 h-96 rounded-lg border shadow-lg bg-white font-clarika">
      <div className="flex border-b">
        {Object.entries({ 1: "Auto-Launch", 2: "Filters" }).map(([index, name]) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center text-sm font-bold ${
              activeTab === Number(index)
                ? "bg-[#3067db] text-white"
                : "text-[#3067db] bg-white hover:bg-[#e0efff]"
            } rounded-t-lg`}
            onClick={() => setActiveTab(Number(index))}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        {activeTab === 1 && (
          <>
            <input
              type="text"
              placeholder="Search..."
              className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3067db]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                applyFilters();
              }}
            />
            <button
              className="w-full bg-[#3067db] text-white py-2 rounded-lg hover:bg-[#2550a5] transition"
              onClick={launchTabs}
            >
              Launch Tabs
            </button>
            <div className="flex items-start mt-4">
              <div className="w-1/5 flex justify-center text-sm font-bold text-gray-700 mt-2">
                <div>
                  <span>Selected</span>
                  <br />
                  <span>Users</span>
                </div>
              </div>
              <div className="w-4/5 bg-gray-100 border border-gray-300 rounded-lg p-4">
                {getSelectedUserDetails().length === 0 ? (
                  <p className="text-gray-500 text-sm">No users selected.</p>
                ) : (
                  getSelectedUserDetails().map((detail, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))
                )}
              </div>
            </div>

            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.userName} className="p-4 border rounded-lg flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={selectedUsers.has(user.userName)}
                    onChange={() => toggleUserSelection(user.userName)}
                    className="mt-1"
                  />
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    <p className="mt-2 font-semibold">Vertical(s):</p>
                    <ul className="list-disc list-inside ml-4">
                      {user.verticals.map((vertical, index) => (
                        <li key={index}>{vertical}</li>
                      ))}
                    </ul>
                    {user.country && <p><strong>Country:</strong> {user.country}</p>}
                    {user.persona && <p><strong>Persona:</strong> {user.persona}</p>}
                    {user.purpose && <p><strong>Purpose:</strong> {user.purpose}</p>}
                    {user.defaultUserRole && (
                      <p>
                        <strong>Default User Role:</strong> {user.defaultUserRole}
                      </p>
                    )}
                    {user.reportsTo && <p><strong>Reports To:</strong> {user.reportsTo}</p>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 2 && (
          <>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-sm mb-2">Selected Filters</h3>
              <ul>
                {Object.entries(multiSelectFilters).map(([field, values]) =>
                  Array.from(values).map((value) => (
                    <li key={`${field}-${value}`} className="text-sm text-gray-600">
                      {field.charAt(0).toUpperCase() + field.slice(1)}: {value}
                    </li>
                  ))
                )}
              </ul>
            </div>

            <p className="font-semibold mb-2">Filter By:</p>
            <div className="flex flex-wrap gap-2">
              {["verticals", "country", "persona"].map((field) => (
                <button
                  key={field}
                  className={`px-4 py-2 rounded-lg ${
                    filterField === field ? "bg-[#3067db] text-white" : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => {
                    setFilterField(field);
                    generateDynamicFilterValues(field);
                  }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </button>
              ))}
            </div>

            {dynamicFilterValues.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Select {filterField}:</p>
                <div className="flex flex-wrap gap-2">
                  {dynamicFilterValues.map((value) => (
                    <button
                      key={value}
                      className={`px-4 py-2 rounded-lg ${
                        multiSelectFilters[filterField]?.has(value)
                          ? "bg-[#3067db] text-white"
                          : "bg-gray-200 text-gray-800"
                      } hover:bg-[#3067db] hover:text-white`}
                      onClick={() => toggleFilterValue(filterField, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <footer className="py-2 text-center text-xs text-gray-500">Crafted by @Dayforce</footer>
    </div>
  );
}

export default IndexPopup;
