import React from "react";

export default function StudentSearchForm({ inputSearch, setInputSearch }) {
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <div>
      <label htmlFor="searchInput">Zoekterm</label>
      <input
        type="text"
        id="searchInput"
        value={inputSearch}
        onChange={handleChange}
      />
    </div>
  );
}
