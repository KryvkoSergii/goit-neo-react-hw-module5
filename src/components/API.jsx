import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTAxNzcyZWJlZDdlODJlNmI3ZDUxZWNjZDNlOGFiZiIsIm5iZiI6MTcyODc3MTU2OC45MjM5Nywic3ViIjoiNjcwYWFiNWEzN2Q4NmQ1MjBiYjA4YjI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fHhIqUNBXr6y7dDXB-L3ECpNrlCcic-VTbMOyP7SQwY";
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export async function tendingMovies() {
  try {
    const response = await axios.get(baseUrl + "/trending/movie/day", options);
return response.data;  
} catch (error) {
    console.error(error);
  }
}
