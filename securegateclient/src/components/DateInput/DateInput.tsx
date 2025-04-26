import React, { useState } from 'react';
import "./DateInput.css";


interface DateInputProps {
  label: string;
  width?: string;
  height?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  width = '300px',
  height = '50px',
  value = '',
  onChange,
}) => {
  const [query, setQuery] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setQuery(e.target.value);
    }
  };

  return (
    <div className="date-input-container" style={{ width, height }}>
      <label htmlFor="date" className="date-label">
        {label}
      </label>
      <input
        id="date"
        type="date"
        value={value || query}
        onChange={handleChange}
        placeholder="Selecione uma data"
      />
    </div>
  );
}

export default DateInput;
