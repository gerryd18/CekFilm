import React from 'react'
import Button from './Button';

const SearchBar = ({ searchQuery, setSearchQuery, onSearchButtonClick }) => {
  return (
    <div className="container mx-auto  mb-12 flex flex-col items-center justify-center gap-y-2 py-[2rem]">
      <h1 className="text-[2rem] text-white mb-4">CekFilm</h1>

      <div className="flex gap-x-4 flex-col md:flex-row gap-y-2">
        <input
          type="text"
          className="px-8 py-3 rounded-md"
          placeholder="Get your favourite movie.."
          name="search"
          id="search"
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
        />

        <Button buttonText="Search" onClick={onSearchButtonClick} />
      </div>
    </div>
  );
};

export default SearchBar