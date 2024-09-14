

import React, { useState } from 'react';
import './App.css'; 


import countriesData from './countrydata';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

 
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.length > 0) {
      
      const filteredSuggestions = countriesData.filter(country =>
        country.name.toLowerCase().includes(value) ||
        country.capital.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="App">
      <h1>Fast Finder Search Bar</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by country or capital"
          value={searchTerm}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                {suggestion.name} - {suggestion.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
