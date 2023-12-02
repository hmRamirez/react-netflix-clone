import axios from "axios";
import { useState, useEffect } from "react";
import endpoints from "../services/movierService";

const Hero = () => {
  const [movie, setmovie] = useState({});

  useEffect(() => {
    /*axios.get(endpoints.popular).then((response) => {
      console.log(response.data);*/

    axios
      .request(endpoints.popular)
      .then(function (response) {
        //console.log(response.data.results);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // obtengo una pelicula al azaar
        setmovie(randomMovie);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // En caso que no traiga nada, Retornara algun texto
  if (!movie)
    return (
      <>
        <p>Fetching movie....</p>
      </>
    );

  // Desestructuro el objeto Movie y muestrop contenido en pantalla
  const { title, backdrop_path, realease_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />

        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="border bg-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="border  border-gray-300 py-2 px-5 ml-4">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{realease_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%]">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
