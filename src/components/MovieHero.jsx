import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Star} from "lucide-react";


const MovieHero = ({movieId, movie}) => {
const genres = movie?.genres || []; // Ensure genres is an array

const backgroundImage = `${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`;

return (
  <section>
    <div className="container mx-auto bg-slate-600 max-w-none">
      <div
        className="relative text-center min-h-[60vh] xl:h-[100vh] p-4 flex items-center justify-center flex-col bg-center bg-cover bg-no-repeat bg-opacity-60 "
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path})`,
        }}
      >
        <div className="absolute overlay top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-80 z-10"></div>
        <div className="z-20 flex flex-col gap-y-8 text-white">
          <h1 className="text-4xl xl:text-6xl font-bold">
            {movie.original_title}
          </h1>
        <p className="text-xl font-light text-teal-300">{movie.tagline}</p>
          <div className="flex items-center justify-center gap-x-2">
            <Star size={32} color="#ffc852" absoluteStrokeWidth />{" "}
            <p className="font-light">{movie.vote_average}</p>
          </div>
          <p className="text-md xl:text-2xl font-light">{movie.overview}</p>
          {movie.genres && (
            <div className="flex items-center justify-center gap-x-3">
              {movie.genres.map((genre, index) => (
                <div
                  key={index}
                  className="border border-white rounded-lg px-4 py-1 cursor-pointer hover:bg-slate-50 hover:text-slate-600 duration-300"
                >
                  {genre.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);
};

export default MovieHero;
