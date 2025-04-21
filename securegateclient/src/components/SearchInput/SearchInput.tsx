import React, { useState } from 'react';
import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

interface SearchInputProps {
  label: string;
  width?: string;
  height?: string;
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  width = '300px',
  height = '50px',
  value = '', 
  onChange, 
}) => {
  const [query, setQuery] = useState(value); 
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); 
    } else {
      setQuery(e.target.value); 
    }
  };

  return (
    <div className="search-input-container">
      <div className={`input-wrapper ${isFocused || query ? 'focused' : ''}`} style={{ width, height }}>
        <label htmlFor="search" className="search-label">
          {label}
        </label>
        <input
          id="search"
          type="text"
          value={value || query} 
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=" "
        />
        <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
}

export default SearchInput;
