import { sendToBackground, sendToContentScript } from "@plasmohq/messaging";
import { useEffect, useState } from 'react';
import userData from './user.json';

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
  const [selectedVerticals, setSelectedVerticals] = useState<string[]>([]);

  useEffect(() => {
    const savedVertical = localStorage.getItem('selectedVertical');
    if (savedVertical) {
      setSelectedVerticals(JSON.parse(savedVertical).map((item) => item.value));
    }
  }, []);

  const generateId = (persona: Persona) => `${persona.userName}-${persona.firstName}-${persona.lastName}`;

  const handleItemClick = async (userName: string) => {
    setSelectedUser(userName);
    const persona = personas.find((p) => p.userName === userName);
    if (persona) {
      const resp = await sendToContentScript({ name: "query-selector-text", body: persona });
      //console.log(resp.body);
    }
  };

  const groupPersonas = () => {
    return personas.reduce((acc: { [key: string]: Persona[] }, persona: Persona) => {
      const key = groupBy === 'vertical' ? persona.vertical : persona.userRole.default;
      acc[key] = acc[key] ? [...acc[key], persona] : [persona];
      return acc;
    }, {});
  };

  const filterPersonas = (grouped: { [key: string]: Persona[] }) => {
    const filtered: { [key: string]: Persona[] } = {};
    Object.entries(grouped).forEach(([key, personas]) => {
      const matches = personas.filter((persona) =>
        (!selectedVerticals.length || selectedVerticals.includes(persona.vertical)) &&
        [persona.userName, persona.firstName, persona.lastName, persona.purpose].some((field) =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      if (matches.length) filtered[key] = matches;
    });
    return filtered;
  };

  const groupedPersonas = groupPersonas();
  const filteredPersonas = filterPersonas(groupedPersonas);

  return (
    <div className="p-4 w-[500px]">
      <h2 className="text-2xl font-semibold mb-2">Advisory Demo Instance</h2>
      <h1 className="text-2xl font-semibold mb-2">Persona Logins</h1><br></br>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex mb-4 space-x-2">
        <button onClick={() => setGroupBy('vertical')} className="btn-primary">
          Group by Vertical
        </button>
        <button onClick={() => setGroupBy('role')} className="btn-primary">
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
                  key={generateId(persona)}
                  onClick={() => handleItemClick(persona.userName)}
                  className={`user-item ${selectedUser === persona.userName ? 'bg-gray-200' : ''}`}
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
