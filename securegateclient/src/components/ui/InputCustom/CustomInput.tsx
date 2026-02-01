import React, { useState } from "react";
import "./CustomInput.css";

interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  icon?: React.ReactNode; // 👈 NOVO
  className?: string;
  width?: string | number;
  height?: string | number;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  type = "text",
  label,
  icon,
  className = "",
  width,
  height,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle: React.CSSProperties = { width, height };
  const shouldFloat = isFocused || value.length > 0;

  return (
   <div
      className={`custom2-input-wrapper ${className} ${
        icon ? "has-icon" : ""
      }`}
      style={inputStyle}
    >
      {icon && <span className="custom2-input-icon">{icon}</span>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="custom2-input"
        {...rest}
      />

      <label className={`custom2-label ${shouldFloat ? "float" : ""}`}>
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
