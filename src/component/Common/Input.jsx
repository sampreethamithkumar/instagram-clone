import React from "react";

const Input = (props) => {
  const { type, name, placeholder, value, onChange, error } = props;

  return (
    <React.Fragment>
      <input
        type={type}
        name={name}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </React.Fragment>
  );
};

export default Input;
