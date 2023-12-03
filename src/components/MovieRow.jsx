import { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
const api_key = import.meta.env.VITE_TMDB_KEY;

const MovieRow = ({ url, cat }) => {
  const [movies, setMovies] = useState([]);

  const api = {
    method: "GET",
    url: url,
    params: { language: "es-AR" },
    headers: {
      accept: "application/json",
      Authorization: api_key,
    },
  };

  useEffect(() => {
    const loader = async () => {
      const search = await axios
        .request(api)
        .then(function (response) {
          const movies = response.data.results;
          console.log(movies);
          setMovies(movies);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    loader();
  }, []);

  return (
    <div>
      <h2 className="">{cat}</h2>

      <div className="">Movie</div>
    </div>
  );
};

export default MovieRow;
