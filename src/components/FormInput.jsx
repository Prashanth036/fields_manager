import React, { useRef } from "react";
import "../Styles/input.css";

const FormInput = ({
  label,
  type,
  placeholder,
  options,
  icon,
  name,
  value,
  onChange,
}) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker
        ? inputRef.current.showPicker() 
        : inputRef.current.focus(); 
    }
  };
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="input-wrapper">
        {type === "select" ? (
          <select
            name={name}
            className="input-field select-field"
            value={value}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            {options?.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={inputRef}
            type={type}
            name={name}
            className="input-field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="input-icon"
            onClick={handleIconClick}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
