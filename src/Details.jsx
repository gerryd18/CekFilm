import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

import { getMovieDetail } from "./api";



const Details = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const movieId = searchParams.get('movie');
    const [movie, setMovie] = useState({});

    const genres = movie.genres;

    useEffect(() => {
      getMovieDetail(movieId).then((result) => {
        // setPopularMovies(result);
        console.log("data result : ")
        console.log(result);

        setMovie(result);
      });
    }, []);

    return (
      <section>
        <div className="container mx-auto bg-slate-600 max-w-none">
          <div className="relative">
            <div className="absolute overlay top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-50 z-10"></div>
            <img
              className="w-full z-1"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
              alt=""
            />
            <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 w-full xl:w-8/12">
              <h1 className="mb-12 text-white text-4xl font-bold">
                {movie.original_title}
              </h1>
              <p className="text-white text-lg">{movie.overview}</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Details
