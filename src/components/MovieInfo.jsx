import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const api_key = import.meta.env.VITE_TMDB_KEY;

const Movie = ({ movie_id = "299054" }) => {
  const [peli, setPeli] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: api_key,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=es-AR`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPeli(response))
      .catch((err) => console.error(err));
  }, []);

  // Desestructuro el objeto Movie y muestrop contenido en pantalla
  const { title, backdrop_path, release_date, overview } = peli;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          loading="lazy"
        />

        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4"></div>
          <p className="text-gray-400 text-xl">{release_date}</p>
          <br />
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] md:text-2xl">
            {overview}
          </p>
          <br />
          <button className="border bg-gray-300 text-black py-2 px-5">
            Reproducir
          </button>
          <button className="border  border-gray-300 py-2 px-5 ml-4">
            <Link to={"/"}>Volver</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
