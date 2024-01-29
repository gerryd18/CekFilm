import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getMovieList = async()=>{
    const movie = await axios.get(
      `${baseUrl}/movie/popular?include_adult=true&page=1&api_key=${apiKey}`
    );
    // console.log({movieList : movie});
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    // console.log({list : search});
    return search.data.results 
} 