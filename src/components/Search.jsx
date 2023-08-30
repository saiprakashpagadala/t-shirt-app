import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search for products..."
        className="search-input"
      />
      <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} color="white"/>
      </button>
    </div>
  );
};

export default Search;
