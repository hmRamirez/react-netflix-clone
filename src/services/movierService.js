const api_key = import.meta.env.VITE_TMDB_KEY;
const url = `https://api.themoviedb.org/3`;

const endpoints = {
  popular: {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzQ4YzgyMzY1YzkwODgyOTg3MTkyYjI3NTY4NjMyZiIsInN1YiI6IjY1NmIzYTIyZmNhZGI0MDExZjg4ODYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V4RObcoEI038MXlWdHZGopLWP_KFU1acalUMGZgfrc0",
    },
  },
  /*
https://api.themoviedb.org/3/movie/top_rated
https://api.themoviedb.org/3/movie/upcoming

https://api.themoviedb.org/3/trending/all/day 
  */
};

export default endpoints;
