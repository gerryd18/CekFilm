import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";
import PopularMovieList from "./components/PopularMovieList";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change import from Switch to Routes
import Details from "./Details";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
      console.log(result); 
    });
  }, []);

  const handleSearchButtonClick = async () => {
    if (searchQuery.length > 3) {
      const query = await searchMovie(searchQuery);
      setPopularMovies(query);
    }
  };

  return (
    <Router>
      <Routes>
        {" "}
        {/* Replace Switch with Routes */}
        <Route
          path="/"
          element={
            <Home
              popularMovies={popularMovies}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
              handleSearchButtonClick={handleSearchButtonClick}
            />
          }
        />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </Router>
  );
};

function Home({
  popularMovies,
  setSearchQuery,
  searchQuery,
  handleSearchButtonClick,
}) {
  // Define Home component separately
  return (
    <div className="container max-w-none mx-auto flex flex-col items-center bg-[#393E46]">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchButtonClick={handleSearchButtonClick}
      />
      <div className="container items-center mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-y-12">
        <PopularMovieList popularMovies={popularMovies} />
      </div>
    </div>
  );
}

export default App;
