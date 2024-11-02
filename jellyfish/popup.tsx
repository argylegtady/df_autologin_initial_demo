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
  vertical: string;
}

function IndexPopup() {
  const [personas] = useState<Persona[]>(userData.personas); // State for personas
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // State to track selected item
  const [groupBy, setGroupBy] = useState<'vertical' | 'role'>('vertical'); // State to track grouping method
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleItemClick = async (index: number) => {
    setSelectedIndex(index); // Highlight the clicked item

    const resp = await sendToContentScript({
      name: "query-selector-text",
      body: personas[index]
    });

    //console.log(resp.body);
  };

  // Function to group personas
  const groupPersonas = () => {
    return personas.reduce((acc: { [key: string]: Persona[] }, persona: Persona) => {
      const key = groupBy === 'vertical' ? persona.vertical : persona.userRole.default; // Group by selected method
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(persona);
      return acc;
    }, {});
  };

  // Function to filter personas based on the search term
  const filterPersonas = (grouped: { [key: string]: Persona[] }) => {
    const filtered: { [key: string]: Persona[] } = {};
    Object.entries(grouped).forEach(([key, personas]) => {
      const matchingPersonas = personas.filter(persona => 
        persona.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        persona.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        persona.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        persona.purpose.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchingPersonas.length > 0) {
        filtered[key] = matchingPersonas;
      }
    });
    return filtered;
  };

  const groupedPersonas = groupPersonas();
  const filteredPersonas = filterPersonas(groupedPersonas);

  return (
    <div style={{ padding: 16, width: '500px', fontFamily: 'Clarika Geometric' }}>
      <h2>Extension</h2>
      <h1>User Information</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }} 
      />
      <div>
        <button 
          onClick={() => setGroupBy('vertical')} 
          style={{
            backgroundColor: '#3067db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 15px',
            margin: '0 5px',
            cursor: 'pointer',
            fontFamily: 'Clarika Geometric',
            transition: 'background-color 0.3s'
          }}
        >
          Group by Vertical
        </button>
        <button 
          onClick={() => setGroupBy('role')} 
          style={{
            backgroundColor: '#3067db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 15px',
            margin: '0 5px',
            cursor: 'pointer',
            fontFamily: 'Clarika Geometric',
            transition: 'background-color 0.3s'
          }}
        >
          Group by Role
        </button>
      </div>
      <div id="userList">
        {Object.entries(filteredPersonas).map(([key, personas]) => (
          <div key={key}>
            <h3>{key}</h3>
            <div>
              {personas.map((persona, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(index)}
                  style={{
                    cursor: "pointer",
                    border: "2px solid #3067db", // Border color
                    borderRadius: "8px", // Rounded corners
                    padding: "12px",
                    margin: "4px 0",
                    transition: "background-color 0.2s",
                    backgroundColor: selectedIndex === index ? "#e0e0e0" : "transparent"
                  }}
                >
                  <strong>User Name:</strong> {persona.userName}<br />
                  <strong>First Name:</strong> {persona.firstName}<br />
                  <strong>Last Name:</strong> {persona.lastName}<br />
                  <strong>Purpose:</strong> {persona.purpose}<br />
                  <strong>Default User Role:</strong> {persona.userRole.default}<br />
                  <strong>Additional User Roles:</strong> {persona.userRole.additional.join(', ')}<br />
                  <strong>Reports To:</strong> {persona.reportsTo.managerName} (Username: {persona.reportsTo.managerUserName})<br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndexPopup;
