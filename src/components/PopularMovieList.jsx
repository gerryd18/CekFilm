import React from "react";
import {Search} from "lucide"

const PopularMovieList = ({ popularMovies }) => {
  return (
    <>
      {popularMovies.map((movie, i) => (
        <div key={i} className="bg-slate-200 p-3 mx-auto mb-2rem rounded-xl w-[20rem] lg:w-[20rem] h-[600px]">
          <div className="w-full mb-5 text-xl text-center">{movie.title}</div>
          <img
            className="w-full"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt=""
          />
          <div className="text-center mt-2 text-lg">{movie.release_date}</div>
          <div className="text-center mt-2 text-yellow-700 font-bold">{movie.vote_average}</div>
        </div>
      ))}
    </>
  );
};

export default PopularMovieList;
