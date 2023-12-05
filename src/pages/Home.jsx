import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
//import endpoints from "../services/endpoints";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow
        url="https://api.themoviedb.org/3/movie/popular"
        cat="Mas Populares"
      />
      <MovieRow
        url="https://api.themoviedb.org/3/movie/top_rated"
        cat="Mejor valoradas"
      />

      <MovieRow
        url="https://api.themoviedb.org/3/movie/upcoming"
        cat="Estrenos"
      />

      <MovieRow
        url="https://api.themoviedb.org/3/discover/movie?with_genres=28"
        cat="Acción"
      />
    </>
  );
};

export default Home;
