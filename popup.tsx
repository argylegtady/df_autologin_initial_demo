import React, { useEffect, useState } from "react";
import verticalsData from "./verticals.json"; // Importing the JSON file
import { sendToBackground } from "@plasmohq/messaging"; // Importing messaging API
import Select from "react-select"; // React Select library for dropdown
import "./style.css";

interface UserData {
  userName: string;
  name: string;
  verticals: string[];
  country: string;
  picture?: string;
  purpose: string;
  defaultUserRole: string;
  persona?: string;
  reportsTo?: string;
  [key: string]: any;
}

function IndexPopup() {
  const [userDictionary, setUserDictionary] = useState<{ [key: string]: UserData }>({});
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]); // Filtered results
  const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]); // Selected users for the box
  const [activeTab, setActiveTab] = useState(1); // Active tab state
  const [backgroundResponse, setBackgroundResponse] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]); // Selected countries for filter
  const [selectedVerticals, setSelectedVerticals] = useState<string[]>([]); // Selected verticals for filter
  const [countries, setCountries] = useState<string[]>([]); // List of unique countries
  const [verticals, setVerticals] = useState<string[]>([]); // List of unique verticals

  useEffect(() => {
    const processedData: { [key: string]: UserData } = {};
    const countrySet = new Set<string>();
    const verticalSet = new Set<string>();

    verticalsData.forEach((entry: any) => {
      const userName = entry["UserName"];
      const vertical = entry["Vertical"];
      const countryMatch = vertical?.match(/\(([^)]+)\)$/);
      const country = countryMatch ? countryMatch[1] : "Unknown";

      if (country) countrySet.add(country);
      if (vertical) verticalSet.add(vertical);

      let purposeDetails = entry["Purpose, User Role & Access Details"] || "";
      let purpose = "";
      let defaultUserRole = "";

      if (purposeDetails.includes("Default User Role:")) {
        const parts = purposeDetails.split("Default User Role:");
        purpose = parts[0].replace("Purpose:", "").trim();
        defaultUserRole = parts[1]?.trim() || "";
      } else {
        purpose = purposeDetails.replace("Purpose:", "").trim();
      }

      if (userName) {
        const userData: UserData = {
          userName,
          name: entry["Name"] || "Unknown",
          verticals: [vertical],
          country,
          picture: entry["Picture"] ? `./assets/${entry["Picture"]}` : undefined,
          purpose,
          defaultUserRole,
          persona: entry["Persona"],
          reportsTo: entry["Reports To"],
          ...entry,
        };

        // Check if the name contains a colon
        if (userData.name.includes(":")) {
          //excludedData[userName] = userData;
        } else {
          processedData[userName] = userData;
        }
      }
    });

    setUserDictionary(processedData);
    setFilteredUsers(Object.values(processedData)); // Initialize filtered users
    setCountries(Array.from(countrySet)); // Set unique countries
    setVerticals(Array.from(verticalSet)); // Set unique verticals
  }, []);

  const applyFilters = () => {
    const results = Object.values(userDictionary).filter((user) => {
      const matchesCountry =
        selectedCountries.length === 0 || selectedCountries.includes(user.country);
      const matchesVertical =
        selectedVerticals.length === 0 ||
        selectedVerticals.some((vertical) => user.verticals.includes(vertical));
      const matchesSearch =
        !searchQuery ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.verticals.join(", ").toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.defaultUserRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.persona?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.reportsTo?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCountry && matchesVertical && matchesSearch;
    });
    setFilteredUsers(results);
  };

  // Apply filters whenever any filter changes
  useEffect(() => {
    applyFilters();
  }, [selectedCountries, selectedVerticals, searchQuery, userDictionary]);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
    if (tab === 2) {
      applyFilters(); // Apply filters when switching to Tab 2
    }
  };

  const toggleUserSelection = (user: UserData) => {
    if (selectedUsers.some((selected) => selected.userName === user.userName)) {
      setSelectedUsers((prev) => prev.filter((u) => u.userName !== user.userName));
    } else {
      setSelectedUsers((prev) => [...prev, user]);
    }
  };

  const isUserSelected = (user: UserData) =>
    selectedUsers.some((selected) => selected.userName === user.userName);

  const sendSelectedUsersToBackground = async () => {
    try {
      const response = await sendToBackground({
        name: "open-tabs",
        body: { users: selectedUsers },
      });
      setBackgroundResponse(response.toString());
    } catch (error) {
      console.error("Error sending data to background script:", error);
      setBackgroundResponse("Failed to send data.");
    }
  };

  return (
    <div className="flex flex-col w-[500px] h-[500px] rounded-lg border shadow-lg bg-white font-clarika">
      {/* Tab Navigation */}
      <div className="flex border-b">
        {Object.entries({ 1: "Launch Tabs", 2: "Directory", 3: "Filter Options" }).map(
          ([index, name]) => (
            <button
              key={index}
              className={`flex-1 py-2 text-center text-sm font-bold ${
                activeTab === Number(index)
                  ? "bg-blue-500 text-white"
                  : "text-blue-500 bg-white hover:bg-blue-100"
              }`}
              onClick={() => handleTabChange(Number(index))}
            >
              {name}
            </button>
          )
        )}
      </div>

      {/* Tab 1: Launch Tabs */}
      {activeTab === 1 && (
        <>
          <div className="p-4 border-b">
            <button
              onClick={sendSelectedUsersToBackground}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Launch Tabs for Selected Personas
            </button>
            {backgroundResponse && (
              <p className="text-xs text-gray-500 mt-2">{backgroundResponse}</p>
            )}
          </div>

          {/* Selected Users Box */}
          <div className="p-2 bg-gray-100 border-b h-100 overflow-y-auto">
            <h2 className="text-sm font-bold mb-1">Selected Personas:</h2>
            {selectedUsers.length === 0 ? (
              <p className="text-xs text-gray-500">None selected.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedUsers.map((user) => (
                  <div
                    key={user.userName}
                    className="text-xs px-2 py-1 border rounded-md bg-blue-100 text-blue-700 cursor-pointer hover:bg-blue-200"
                    onClick={() => toggleUserSelection(user)}
                  >
                    {user.name} ({user.userName})
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* Tab 2: User Directory */}
      {activeTab === 2 && (
        <>
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search ADI personas by any field..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex-grow p-2 overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {filteredUsers.map((user) => (
                <div
                  key={user.userName}
                  className={`p-2 border rounded-md flex items-start gap-2 cursor-pointer hover:bg-gray-100 ${
                    isUserSelected(user) ? "bg-gray-200" : "bg-white"
                  }`}
                  onClick={() => toggleUserSelection(user)}
                >
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-sm font-semibold">{user.name}</h3>
                    <p className="text-xs text-gray-700">
                      <strong>Country:</strong> {user.country}
                    </p>
                    <p className="text-xs text-gray-700">
                      <strong>Vertical:</strong> {user.verticals.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Tab 3: Filter Options */}
      {activeTab === 3 && (
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Filter Options</h2>

          {/* Multi-Select for Country */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Filter by Country:</label>
            <Select
              options={countries.map((country) => ({ value: country, label: country }))}
              onChange={(selectedOptions) =>
                setSelectedCountries(
                  selectedOptions ? selectedOptions.map((opt) => opt.value) : []
                )
              }
              isMulti
              placeholder="Select Countries"
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>

          {/* Multi-Select for Vertical */}
          <div>
            <label className="block text-sm font-semibold mb-2">Filter by Vertical:</label>
            <Select
              options={verticals.map((vertical) => ({ value: vertical, label: vertical }))}
              onChange={(selectedOptions) =>
                setSelectedVerticals(
                  selectedOptions ? selectedOptions.map((opt) => opt.value) : []
                )
              }
              isMulti
              placeholder="Select Verticals"
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
      )}
      <footer className="py-2 text-center text-xs text-gray-500">Crafted by @Dayforce</footer>
    </div>
  );
}

export default IndexPopup;
