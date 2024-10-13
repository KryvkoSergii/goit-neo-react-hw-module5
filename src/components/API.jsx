import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTAxNzcyZWJlZDdlODJlNmI3ZDUxZWNjZDNlOGFiZiIsIm5iZiI6MTcyODc3MTU2OC45MjM5Nywic3ViIjoiNjcwYWFiNWEzN2Q4NmQ1MjBiYjA4YjI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fHhIqUNBXr6y7dDXB-L3ECpNrlCcic-VTbMOyP7SQwY";

const headers = {
  Authorization: `Bearer ${API_KEY}`
}

const options = {
  headers: headers,
};

export async function fetchTendingMovies() {
  try {
    const response = await axios.get("/trending/movie/day", options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieRevies(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchMovies(query) {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: query
      },
      headers: headers
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function getImgSrc(id) {
  return baseImgUrl + id;
}