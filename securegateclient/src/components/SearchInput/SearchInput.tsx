import React, { useState } from 'react';
import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

interface SearchInputProps {
  label: string;
  width?: string;
  height?: string;
  value?: string; // Parâmetro opcional
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Parâmetro opcional
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  width = '300px',
  height = '50px',
  value = '', // Fallback para valor vazio
  onChange, // Fallback para undefined
}) => {
  const [query, setQuery] = useState(value); // Usar o valor prop passado, caso não tenha, usa o estado interno
  const [isFocused, setIsFocused] = useState(false);

  // A função de handleChange irá chamar onChange se ele for passado
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Chama o onChange do componente pai se ele for passado
    } else {
      setQuery(e.target.value); // Caso contrário, usa o estado interno
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
          value={value || query} // Usa o value se passar como prop, caso contrário usa o estado interno
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
