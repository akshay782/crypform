import React from "react";
import "./input.scss";

const Input = (props) => {
  const { htmlFor, label, type, name, id, value, onChange, placeholder } = props;
  return (
    <div className="form_input">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        autoComplete="off"
        required
        value={value}
        onChange={onChange}
        data-testid="inputField"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
