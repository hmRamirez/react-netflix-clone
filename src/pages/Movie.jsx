import MovieInfo from "../components/MovieInfo";
import { useLocation } from "react-router-dom";

const Movie = () => {
  let { state } = useLocation();
  //console.log(state);

  return (
    <>
      <MovieInfo movie_id={state} />
    </>
  );
};

export default Movie;
