import("./movieItem.css");

const MovieItem = ({ movie }) => {
  return (
    <div
      id="mi"
      className="relative w-[250px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
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
  );
};

export default MovieItem;
