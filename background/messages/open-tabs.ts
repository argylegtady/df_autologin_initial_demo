import type { PlasmoMessaging } from "@plasmohq/messaging";

const TABS_INFO: {
  [tabId: number]: { username: string; persona: string; vertical: string };
} = {};

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

export type RequestBody = {
  users: UserData[];
};

export type RequestResponse = number;

const handler: PlasmoMessaging.MessageHandler<RequestBody, RequestResponse> = async (req, res) => {
  const { users } = req.body;

  if (!users || users.length === 0) {
    console.log("No users received.");
    res.send(400); // Bad request
    return;
  }

  console.log("Received users:", users);

  for (const user of users) {
    const username = user.userName || "Unknown User";
    const persona = user.persona || "Unknown Persona";
    const vertical = user.verticals.join(", ") || "Unknown Vertical";

    // Open a new tab
    const newTab = await chrome.tabs.create({
      url: "https://nademo.dayforcehcm.com/mydayforce/mydayforce.aspx",
      active: false, // Open in the background
    });

    if (newTab?.id) {
      // Save tab ID along with the username, persona, and vertical
      TABS_INFO[newTab.id] = { username, persona, vertical };

      const customTitle = `${persona} - ${vertical}`;

      // Set the custom title and fill the fields
      chrome.scripting.executeScript({
        target: { tabId: newTab.id },
        func: (tabInfo) => {
          const { username, persona, title } = tabInfo;

          // Update tab title
          document.title = title;

          // Helper function to fill in input fields
          const setInputValue = (inputId: string, value: string, intervalId: NodeJS.Timeout) => {
            const inputElement = document.getElementById(inputId) as HTMLInputElement | null;
            if (inputElement) {
              clearInterval(intervalId);
              inputElement.value = value;
              return true;
            }
            return false;
          };

          const createInputCheck = (inputId: string, value: string, callback: () => void) => {
            return setInterval(() => {
              if (setInputValue(inputId, value, this)) {
                callback();
              }
            }, 1000);
          };

          // Fill username and password
          const checkUsername = createInputCheck("txtUserName", username, () => {});
          const checkPassword = createInputCheck("txtUserPass", "Aromas1$", () => {});

          // Check if all fields are filled, then enable login
          const checkAllInputs = setInterval(() => {
            const userInput = document.getElementById("txtUserName") as HTMLInputElement | null;
            const passwordInput = document.getElementById("txtUserPass") as HTMLInputElement | null;

            if (userInput?.value === username && passwordInput?.value === "Aromas1$") {
              clearInterval(checkAllInputs);
              const loginButton = document.getElementById(
                "MainContent_loginUI_cmdLogin"
              ) as HTMLElement | null;

              if (loginButton) {
                console.log("Login button ready to click");
                // Uncomment to enable automatic login
                // loginButton.click();
              }

              clearInterval(checkUsername);
              clearInterval(checkPassword);
            }
          }, 1000);
        },
        args: [{ username, persona, title: customTitle }],
      });

      console.log(
        `Opened tab ${newTab.id}: Username: ${username}, Persona: ${persona}, Vertical: ${vertical}`
      );
    }
  }

  // Listen for tab updates to reapply the custom title
  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === "complete" && TABS_INFO[tabId]) {
      const { persona, vertical } = TABS_INFO[tabId];
      const customTitle = `${persona} - ${vertical}`;

      chrome.scripting.executeScript({
        target: { tabId },
        func: (title) => {
          document.title = title;
        },
        args: [customTitle],
      });

      console.log(`Updated tab ${tabId} with title: ${customTitle}`);
    }
  });

  // Log all opened tabs
  console.log("Opened tabs with details:", TABS_INFO);

  res.send(200); // Success response
};

export default handler;
