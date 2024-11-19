import type { PlasmoCSConfig } from "plasmo";
import type { PlasmoMessaging } from "@plasmohq/messaging"
import personasData from ".././verticals.json"; // Adjust path if necessary

export const config: PlasmoCSConfig = {
  all_frames: false,
  matches: ["https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx"]
};

const QueryTextAnywhere = () => {
  // Print the tab's title directly
  console.log("Tab title:", document.title);
  const pass = "Aromas1$";

  const check_doc_title = setInterval(() => {
    console.log(document.title);
    if (document.title.includes('-')) {
      const titleParts = document.title.split(" ");
      if (titleParts[1] === "-" && titleParts[3] === "-") {
        clearInterval(check_doc_title);
         const thisName = titleParts[4] + ' ' + titleParts[5];
         console.log(thisName);

        // Find and return the object from verticals.json that matches the region code
        const matchedVertical = personasData.find(vertical =>
          vertical.Name.includes(thisName)
        );

        if (matchedVertical){
            // Functions to set input values and handle intervals
            console.log(matchedVertical);
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
    
            // Setting up checks for username and password fields
            const checkUsername = createInputCheck('txtUserName', matchedVertical.UserName, () => { });
            const checkPassword = createInputCheck('txtUserPass', pass, () => { });
    
            // Check if all inputs are filled, then attempt to log in
            const checkAllInputs = setInterval(() => {
              const userInput = document.getElementById('txtUserName') as HTMLInputElement | null;
              const passwordInput = document.getElementById('txtUserPass') as HTMLInputElement | null;
    
              if (userInput?.value === matchedVertical.UserName && passwordInput?.value === pass) {
                clearInterval(checkAllInputs);
                const loginButton = document.getElementById('MainContent_loginUI_cmdLogin') as HTMLElement | null;
                if (loginButton) {
                  // loginButton.click(); // Uncomment to enable automatic login
                }
                clearInterval(checkUsername);
                clearInterval(checkPassword);
              }
            }, 1000);
          } else {
            console.log("No matching persona found for this tab title.");
          }
        }


    }
  }, 1000); // Check every 1000ms (1 second)

  return <div />;
};

export default QueryTextAnywhere;
