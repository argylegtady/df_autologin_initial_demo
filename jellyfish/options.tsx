import React, { useState, useEffect } from 'react';
// Optionally, use a library for multi-select (e.g., 'react-select')
import Select from 'react-select';
import userData from './user.json'; // adjust path as needed

// Extract unique verticals
const uniqueVerticals = Array.from(new Set(userData.personas.map((persona) => persona.vertical)));

const Options = () => {
  const [selectedVerticals, setSelectedVerticals] = useState([]);

  const handleSelectionChange = (selectedOptions) => {
    setSelectedVerticals(selectedOptions);
    // console.log('Selected verticals:', selectedOptions.map((opt) => opt.value));
    localStorage.setItem('selectedVertical', JSON.stringify(selectedOptions));
  };

  // Format options for react-select or similar library
  const verticalOptions = uniqueVerticals.map((vertical) => ({
    value: vertical,
    label: vertical,
  }));

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <h1>Select which verticals you'd like to be included in the login list:</h1>
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
      />
    </div>
  );
};

export default Options;
