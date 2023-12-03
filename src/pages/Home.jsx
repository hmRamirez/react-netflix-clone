import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
//import endpoints from "../services/endpoints";

const Home = () => {
  return (
    <>
      <MovieRow
        url="https://api.themoviedb.org/3/movie/popular"
        cat="Mas Populares"
      />
    </>
  );
};

export default Home;
