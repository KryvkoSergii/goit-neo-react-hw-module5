import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: "Bearer api_read_access_token",
  },
};

function tendingMovies() {
  async function getTranding() {
    try {
      const response = await axios.get(
        baseUrl + "/trending/movie/day",
        options
      );
    } catch (error) {
      console.error(error);
    }
  }

  return getTranding();
}
