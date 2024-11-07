import React, { useState } from 'react';
import Select from 'react-select';
import userData from './user.json';

import "./style.css";

const uniqueVerticals = Array.from(new Set(userData.personas.map((persona) => persona.vertical)));

const Options = () => {
  const [selectedVerticals, setSelectedVerticals] = useState([]);

  const handleSelectionChange = (selectedOptions) => {
    setSelectedVerticals(selectedOptions);
    localStorage.setItem('selectedVertical', JSON.stringify(selectedOptions));
  };

  const verticalOptions = uniqueVerticals.map((vertical) => ({
    value: vertical,
    label: vertical,
  }));

  return (
    <div className="p-4 w-[400px] h-[400px]">
      <h1 className="text-xl font-bold mb-4">Select which verticals to include in the login list:</h1>
      <Select
        options={verticalOptions}
        isMulti
        onChange={handleSelectionChange}
        placeholder="Select verticals"
        styles={{
          container: (base) => ({
            ...base,
            width: '100%',
            height: '100%',
          }),
        }}
        className="custom-select"
      />
    </div>
  );
};

export default Options;
