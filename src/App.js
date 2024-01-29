import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";
import Button from "./components/Button";
import PopularMovieList from "./components/PopularMovieList";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleSearchButtonClick = async () => {
    if (searchQuery.length > 3) {
      const query = await searchMovie(searchQuery);
      setPopularMovies(query);
    }
  };

  return (
    <div className="App container mx-auto flex flex-col items-center bg-slate-700">
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

          <Button buttonText="Search" onClick={handleSearchButtonClick} />
        </div>
      </div>
      <div className="container flex items-center mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-y-12">
        <PopularMovieList popularMovies={popularMovies} />
      </div>
    </div>
  );
};

export default App;
