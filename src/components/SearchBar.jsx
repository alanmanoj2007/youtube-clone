import React, { useState, useRef } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, placeholder = 'Search videos...' }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        aria-label="Search"
      />
      <button type="button" aria-label="Search">
        🔍
      </button>
    </div>
  );
}

export default SearchBar;