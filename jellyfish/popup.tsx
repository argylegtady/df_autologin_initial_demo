import { sendToBackground, sendToContentScript } from "@plasmohq/messaging";
import { useState } from "react";
import userData from './user.json'; // Adjust the path if necessary

interface UserRole {
  default: string;
  additional: string[];
}

interface ReportsTo {
  managerName: string;
  managerUserName: string;
}

interface Persona {
  userName: string;
  firstName: string;
  lastName: string;
  purpose: string;
  userRole: UserRole;
  reportsTo: ReportsTo; // Mandatory
}

function IndexPopup() {
  const [personas] = useState<Persona[]>(userData.personas); // State for personas
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // State to track selected item

  const handleItemClick = async (index: number) => {
    setSelectedIndex(index); // Highlight the clicked item

    const resp = await sendToContentScript({
      name: "query-selector-text",
      body: personas[index]
    });

    //console.log(resp);
  };

  return (
    <div style={{ padding: 16, width: '500px' }}>
      <h2>Extension</h2>
      <h1>User Information</h1>
      <ul id="userList">
        {personas.map((persona, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedIndex === index ? "#e0e0e0" : "transparent",
              padding: "12px", // Increased padding
              margin: "4px 0",
              borderRadius: "4px",
              transition: "background-color 0.2s" // Smooth transition
            }}
          >
            <strong>User Name:</strong> {persona.userName}<br />
            <strong>First Name:</strong> {persona.firstName}<br />
            <strong>Last Name:</strong> {persona.lastName}<br />
            <strong>Purpose:</strong> {persona.purpose}<br />
            <strong>Default User Role:</strong> {persona.userRole.default}<br />
            <strong>Additional User Roles:</strong> {persona.userRole.additional.join(', ')}<br />
            <strong>Reports To:</strong> {persona.reportsTo.managerName} (Username: {persona.reportsTo.managerUserName})<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPopup;
