import { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const api_key = import.meta.env.VITE_TMDB_KEY;

const MovieRow = ({ url, cat }) => {
  const [movies, setMovies] = useState([]);
  const sliderId = Math.floor(Math.random() * 1000);
  console.log(url);

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
          const movieList = response.data.results;
          console.log(movieList);
          setMovies(movieList);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    loader();
  }, []);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + sliderId);
    slider.scrollLeft = slider.scrollLeft - offset;
  };

  return (
    <div>
      <h2 className="font-nsans-bold md:text-2xl p-4 capitalize">{cat}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={60}
          onClick={() => {
            slide(500);
          }}
        />

        <div
          id={"slider" + sliderId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
        <MdChevronRight
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={60}
          onClick={() => {
            slide(-500);
          }}
        />
      </div>
    </div>
  );
};

export default MovieRow;
