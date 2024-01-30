import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

import { getMovieDetail } from "./api";
import MovieHero from './components/MovieHero';



const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get("movie");
  const [movie, setMovie] = useState({});

  const genres = movie.genres;


  useEffect(() => {
    getMovieDetail(movieId).then((result) => {
      // setPopularMovies(result);
      console.log("data result : ");
      console.log(result);

      setMovie(result);
    });
  }, [movieId]);   

  return (
    <section>
      <MovieHero movieId={movieId} movie={movie} />
    </section>
  );
}

export default Details
