import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

import { getMovieDetail } from "./api";



const Details = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const movieId = searchParams.get('movie');
    const [movie, setMovie] = useState({});

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
            <div className="container mx-auto">
                <h1 className='text-3xl'>{movie.original_title}</h1>
            </div>
        </section>
    )
}

export default Details
