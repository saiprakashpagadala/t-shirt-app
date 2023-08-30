import React, { useState } from "react";
import clothingOptions from "../categories.json";
import "./SideBar.css"

const SideBar = () => {
  const [selectedOptions, setSeletedOptions] = useState([]);
  const handleCheckboxChange = () => {};
  return (
    <>
      <div className="sidebar-container">
        {Object.keys(clothingOptions).map((category) => {
          return (
            <div key={category}>
              <h4>{category}</h4>
              <div className="options">
                {clothingOptions[category].map((option) => (
                  <label key={option.id}>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      checked={selectedOptions[category]?.[option.value]}
                      onChange={() =>
                        handleCheckboxChange(category, option.value)
                      }
                    />
                    {option.value}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
