import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input 
        type="text"
        placeholder="Search..."
        value={search} // controlled input
        onChange={(e) => onSearchChange(e.target.value)} // update state
      />
    </div>
  );
}

export default Filter;
