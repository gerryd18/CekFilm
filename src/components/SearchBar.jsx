import React from "react";
import Button from "./Button";

const SearchBar = ({ searchQuery, setSearchQuery, onSearchButtonClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      onSearchButtonClick();
    }
  };

  return (
    <div className="container  mx-auto mb-12 flex flex-col items-center justify-center gap-y-2 py-[2rem]">
      <div className="w-full flex items-center h-[20vh] justify-center">
        <h1 className="text-5xl text-white mb-4 tracking-wide">CekFilm</h1>
      </div>

      <div className="flex gap-x-4 flex-col md:flex-row gap-y-2">
        <input
          type="text"
          className="px-8 py-3 rounded-md"
          placeholder="Get your favourite movie.."
          name="search"
          id="search"
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          onKeyDown={handleKeyDown} // Call handleKeyDown on key down
        />

        <Button buttonText="Search" onClick={onSearchButtonClick} />
      </div>
    </div>
  );
};

export default SearchBar;
