import type { PlasmoCSConfig } from "plasmo";
import { useMessage } from "@plasmohq/messaging/hook";

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ["https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx"]
};

const QueryTextAnywhere = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    console.log(req.body);
    const userName = req.body.userName;
    console.log(userName);
    const loginDetails = {
      namespace: "nademo4a",
      username: userName,
      password: "Aromas1$",
    };

    // Function to check and set the input value
    const setInputValue = (inputId: string, value: string, intervalId: NodeJS.Timeout) => {
      const inputElement = document.getElementById(inputId) as HTMLInputElement | null;
      if (inputElement) {
        clearInterval(intervalId);
        inputElement.value = value;
        return true; // Indicate success
      }
      return false; // Indicate failure
    };

    // Function to create a polling interval for input fields
    const createInputCheck = (inputId: string, value: string, callback: () => void) => {
      return setInterval(() => {
        if (setInputValue(inputId, value, this)) {
          callback();
        }
      }, 1000);
    };

    // Create intervals for namespace, username, and password inputs
    const checkNamespace = createInputCheck('txtCompanyName', loginDetails.namespace, () => {});
    const checkUsername = createInputCheck('txtUserName', loginDetails.username, () => {});
    const checkPassword = createInputCheck('txtUserPass', loginDetails.password, () => {
      const loginButton = document.getElementById('MainContent_loginUI_cmdLogin') as HTMLElement | null;
      if (loginButton) {
        loginButton.click(); // Click the login button after setting the password
      }
    });

    // Check all inputs in a single interval
    const checkAllInputs = setInterval(() => {
      const namespaceInput = document.getElementById('txtCompanyName') as HTMLInputElement | null;
      const userInput = document.getElementById('txtUserName') as HTMLInputElement | null;
      const passwordInput = document.getElementById('txtUserPass') as HTMLInputElement | null;

      if (
        namespaceInput?.value === loginDetails.namespace &&
        userInput?.value === loginDetails.username &&
        passwordInput?.value === loginDetails.password
      ) {
        clearInterval(checkAllInputs);
        const loginButton = document.getElementById('MainContent_loginUI_cmdLogin') as HTMLElement | null;
        if (loginButton) {
          loginButton.click(); // Click the login button when all fields match
        }
        clearInterval(checkNamespace);
        clearInterval(checkUsername);
        clearInterval(checkPassword);
      }
    }, 1000);

    res.send("200");
  });

  return <div />;
};

export default QueryTextAnywhere;
