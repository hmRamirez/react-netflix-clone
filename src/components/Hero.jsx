import axios from "axios";
import { useState, useEffect } from "react";
const api_key = import.meta.env.VITE_TMDB_KEY;

const Hero = () => {
  const [movie, setmovie] = useState({});

  const api = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
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
          //console.log(movieList);
          // obtengo una pelicula al azaar
          const randomMovie =
            movieList[Math.floor(Math.random() * movieList.length)];
          setmovie(randomMovie);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    loader();
  }, []);

  // En caso que no traiga nada, Retornara algun texto
  if (!movie)
    return (
      <>
        <p>Fetching movie....</p>
      </>
    );

  // Desestructuro el objeto Movie y muestrop contenido en pantalla
  const { title, backdrop_path, release_date, overview } = movie;

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
          <div className="mt-8 mb-4">
            <button className="border bg-gray-300 text-black py-2 px-5">
              Reproducir
            </button>
            <button className="border  border-gray-300 py-2 px-5 ml-4">
              Ver mas tarde
            </button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <br />
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] md:text-2xl">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
