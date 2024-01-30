import React from "react";
import { Link } from "react-router-dom";
import {Star} from "lucide-react";

const PopularMovieList = ({ popularMovies }) => {
  return (
    <>
      {popularMovies.map((movie, i) => (
        <Link to={`/detail?movie=${movie.id}`} key={movie.id}>
          <div className="relative rounded-xl overflow-hidden bg-blend-darken">
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              alt=""
              className="w-full"
            />

            {/* Use Tailwind CSS hover utilities */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-600/50 opacity-0 flex items-center justify-center transition-all duration-300 hover:opacity-100">
              <div className="flex items-center justify-center gap-x-2">
                <Star size={32} color="#ffc852" absoluteStrokeWidth />{" "}
                <p className="font-bold text-white">{movie.vote_average}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PopularMovieList;
