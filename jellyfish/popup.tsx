import { sendToBackground, sendToContentScript } from "@plasmohq/messaging";
import { useState } from "react";
import { useReducer } from "react";
import userData from './user.json'; // Adjust the path if necessary

import "./style.css";

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
  reportsTo: ReportsTo;
  vertical: string;
}

function IndexPopup() {
  const [personas] = useState<Persona[]>(userData.personas);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [groupBy, setGroupBy] = useState<'vertical' | 'role'>('vertical');
  const [searchTerm, setSearchTerm] = useState('');

  const generateId = (persona: Persona) => {
    return `${persona.userName}-${persona.firstName}-${persona.lastName}`;
  };


  const handleItemClick = async (userName: string) => {
    setSelectedUser(userName);

    const persona = personas.find(p => p.userName === userName);
    if (persona) {
      const resp = await sendToContentScript({
        name: "query-selector-text",
        body: persona
      });

      console.log(resp.body);
    }
  };

  const groupPersonas = () => {
    return personas.reduce((acc: { [key: string]: Persona[] }, persona: Persona) => {
      const key = groupBy === 'vertical' ? persona.vertical : persona.userRole.default;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(persona);
      return acc;
    }, {});
  };

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
    <div className="p-4 w-[500px] font-clarika-geometric">
      <h2 className="text-2xl">Extension</h2>
      <h1 className="text-4xl font-bold mb-4">User Information</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="mb-4">
        <button
          onClick={() => setGroupBy('vertical')}
          className="bg-blue-600 text-white border-none rounded-lg px-4 py-2 mx-2 cursor-pointer transition-all hover:bg-blue-500"
        >
          Group by Vertical
        </button>
        <button
          onClick={() => setGroupBy('role')}
          className="bg-blue-600 text-white border-none rounded-lg px-4 py-2 mx-2 cursor-pointer transition-all hover:bg-blue-500"
        >
          Group by Role
        </button>
      </div>
      <div id="userList">
        {Object.entries(filteredPersonas).map(([key, personas]) => (
          <div key={key}>
            <h3 className="text-xl font-semibold mb-2">{key}</h3>
            <div>
              {personas.map((persona) => (
                <div
                  key={generateId(persona)}  // Using the generated ID
                  onClick={() => handleItemClick(persona.userName)}
                  className={`cursor-pointer border-2 border-blue-600 rounded-lg p-3 mb-2 transition-all ${selectedUser === persona.userName ? 'bg-gray-200' : 'bg-transparent'
                    }`}
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
