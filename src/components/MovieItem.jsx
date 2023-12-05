import { Link } from "react-router-dom";
import("./movieItem.css");

function alertar() {
  console.log("Hola");
}

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} state={`${movie.id}`}>
      <div
        id=""
        className="relative w-[250px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 mi"
      >
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-90">
          <p className="whitespace-normal flex justify-center items-center h-full font-nsans-bold text-2xl">
            {movie.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
