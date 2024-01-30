import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import PopularMovieList from "../components/PopularMovieList";
import { getMovieList, searchMovie, nowPlayingMovie, topRatedMovie, comingSoonMovie } from "../api";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  

//   useEffect(() => {
//     getMovieList().then((result) => {
//       setPopularMovies(result);
//     });
//   }, []);

  useEffect(() => {
    let type = new URLSearchParams(location.search).get("type");
    console.log("type = " + type);

    if(type == null){
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }else if(type === "nowPlaying"){
        nowPlayingMovie().then((result) => {
          setPopularMovies(result);
        });
    }else if(type === "topRated"){
        topRatedMovie().then((result) => {
        setPopularMovies(result);
        });
    }else if(type === "comingSoon"){
        comingSoonMovie().then((result) => {
          setPopularMovies(result);
        });
    }
  }, [location]);

  const handleSearchButtonClick = async () => {
    if (searchQuery.length > 3) {
      const query = await searchMovie(searchQuery);
      setPopularMovies(query);
    }
  };

  return (
    <div className="container max-w-none mx-auto flex flex-col items-center bg-[#393E46]">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchButtonClick={handleSearchButtonClick}
      />
      <div className="container items-center mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-y-12 gap-x-8 rounded-xl overflow-hidden">
        <PopularMovieList popularMovies={popularMovies} />
      </div>
    </div>
  );
};

export default Home;
