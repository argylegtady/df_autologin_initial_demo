import type { PlasmoCSConfig } from "plasmo"

import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  all_frames: true
}

const QueryTextAnywhere = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    console.log(req.body)
    var reqd = req.body

    const login_details = {
      namespace: "nademo4a",
      username: req.body["userName"],
      password: "Aromas1$"
    };

    // Function to check and set the input value
    const setInputValue = (inputId: string, value: string, intervalId: NodeJS.Timeout) => {
      const inputElement = document.getElementById(inputId) as HTMLInputElement | null;

      if (inputElement !== null) {
        clearInterval(intervalId);
        inputElement.value = value;
        return true; // Indicate success
      }
      return false; // Indicate failure
    };

    // Check for namespace input
    const check_namespace = setInterval(() => {
      if (setInputValue('txtCompanyName', login_details.namespace, check_namespace)) {
        // Optionally log or perform additional actions
      }
    }, 1000);

    // Check for username input
    const check_user = setInterval(() => {
      if (setInputValue('txtUserName', login_details.username, check_user)) {
        // Optionally log or perform additional actions
      }
    }, 1000);

    // Check for password input
    const check_password = setInterval(() => {
      if (setInputValue('txtUserPass', login_details.password, check_password)) {
        const loginButton = document.getElementById('MainContent_loginUI_cmdLogin') as HTMLElement | null;
        if (loginButton) {
          loginButton.click(); // Click the login button after setting the password
        }
      }
    }, 1000);

    // Check all inputs
    const check_all = setInterval(() => {
      const namespaceInput = document.getElementById('txtCompanyName') as HTMLInputElement | null;
      const userInput = document.getElementById('txtUserName') as HTMLInputElement | null;
      const passwordInput = document.getElementById('txtUserPass') as HTMLInputElement | null;

      if (
        namespaceInput?.value === login_details.namespace &&
        userInput?.value === login_details.username &&
        passwordInput?.value === login_details.password
      ) {
        clearInterval(check_all);
        const loginButton = document.getElementById('MainContent_loginUI_cmdLogin') as HTMLElement | null;
        if (loginButton) {
          loginButton.click(); // Click the login button when all fields match
        }
      }
    }, 1000);


    res.send("200")
  })
  return (
    <div>
    </div>
  )
}

export default QueryTextAnywhere
