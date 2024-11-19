import "@plasmohq/messaging/background"

import { startHub } from "@plasmohq/messaging/pub-sub"

console.log(`BGSW - Starting Hub`)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.name === "tabListeners") {
      const tabListeners = message.body;
      console.log(tabListeners);
      checkAndRenameTab(tabListeners);
      sendResponse({ status: "tab listeners received" });
    }
  });
  
  function checkAndRenameTab(tabListeners) {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.title && changeInfo.title.includes("example")) {
        const url = tab.url;
  
        // Check if the URL exists in tabListeners and the tab ID matches the stored ID
        if (tabListeners[url] && tabListeners[url].tabId === tabId) {
          console.log(`Renaming tab ${tabId} for URL ${url}`);
          
          // Rename the tab
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: (newTitle) => { document.title = newTitle; },
            args: ["yes" + tabId]
          });
        }
      }
    });
  }
  

startHub()