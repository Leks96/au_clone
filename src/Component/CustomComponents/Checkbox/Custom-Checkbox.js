import React, { useState, useEffect } from "react";
import CheckIcon from "../../SVGIcons/CheckIcon/CheckIcon";
import "./Custom-Checkbox.css";

const CustomCheckbox = ({ label, value, name, onchangeFunc }) => {
  const isChecked = () => {
    return value === true;
  };

  return (
    <label className={`custom-checkbox ${value === true ? "checked" : ""}`}>
      <input
        type="checkbox"
        checked={value === true}
        name={name}
        onChange={onchangeFunc}
      />
      <span className="checkmark">
        {value === true ? <CheckIcon className="checky" /> : ""}
      </span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
