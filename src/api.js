import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getMovieList = async()=>{
    const movie = await axios.get(
      `${baseUrl}/movie/popular?include_adult=true&include_video=true&page=1&api_key=${apiKey}`
    );
    // console.log({movieList : movie});
    return movie.data.results
}

export const nowPlayingMovie = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/now_playing?include_adult=true&page=1&api_key=${apiKey}`
  );
  // console.log({movieList : movie});
  return movie.data.results;
};

export const comingSoonMovie = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/upcoming?include_adult=true&page=1&api_key=${apiKey}`
  );
  // console.log({movieList : movie});
  return movie.data.results;
};

export const topRatedMovie = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/top_rated?include_adult=true&page=1&api_key=${apiKey}`
  );
  // console.log({movieList : movie});
  return movie.data.results;
};

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    // console.log({list : search});
    return search.data.results 
} 

export const getMovieDetail = async(q)=>{
  const search = await axios.get(`${baseUrl}/movie/${q}?language=en-US&api_key=${apiKey}`);
  return search.data
}