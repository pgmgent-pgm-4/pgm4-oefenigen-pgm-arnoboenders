import React from "react";

export default function EmojiSearchForm({ inputSearch, setInputSearch }) {
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <div>
      <label htmlFor="searchInput">Search</label>
      <input
        type="text"
        id="searchInput"
        value={inputSearch}
        onChange={handleChange}
      />
    </div>
  );
}
