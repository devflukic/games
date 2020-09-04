import React from "react";

function Input({
  type,
  className,
  placeholder,
  value,
  onChange,
  label,
  name,
  required,
  checked,
  defaultValue,
  defaultChecked,
  min,
  max
}) {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input
        type={!type ? "text" : type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        checked={checked}
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
        min={min}
        max={max}
      />
    </div>
  );
}

export default Input;
