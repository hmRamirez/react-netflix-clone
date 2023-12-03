import axios from "axios";

const api_key = import.meta.env.VITE_TMDB_KEY;

// CATEGORIAS
const url_popular = "https://api.themoviedb.org/3/movie/popular";
const url_top = "https://api.themoviedb.org/3/movie/top_rated";
const url_upcoming = "https://api.themoviedb.org/3/movie/upcoming";
const url_recomendados = "https://api.themoviedb.org/3/trending/all/week";
const url_accion = "https://api.themoviedb.org/3/discover/movie?with_genres=28";
//const url_drama = "https://api.themoviedb.org/3/trending/all/week";
//const url_romanticos = "https://api.themoviedb.org/3/trending/all/week";
//const url_comedia = "https://api.themoviedb.org/3/trending/all/week";
//const url_documentales = "https://api.themoviedb.org/3/trending/all/week";

// settings generales de la API
const api = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "es-AR" },
  headers: {
    accept: "application/json",
    Authorization: api_key,
  },
};

// LISTADO DE CONSULTAS A TMDB
const List = [];

const basicFetch = async () => {
  const search = await axios
    .request(api)
    .then(function (response) {
      const movies = response.data.results;
      //List.push(movies);
      return movies;
    })
    .catch(function (error) {
      console.error(error);
    });
};

// --  LISTAS OBTENIDAS ------

async function generarLista() {
  const movieList = await basicFetch();
  console.log(movieList);
  //List.push[movieList];
  //console.log(List);
}

/*
const getHomeList = () => {
  return [
    {
      slug: "Populares",
      title: "Populares",
      items: basicFetch(url_popular),
    },
    {
      slug: "Top",
      title: "Mejor rankeadas",
      items: basicFetch(url_top),
    },
    {
      slug: "Upcoming",
      title: "Próximos estrenos",
      items: basicFetch(url_upcoming),
    },
    {
      slug: "Upcoming",
      title: "Próximos estrenos",
      items: basicFetch(url_recomendados),
    },
    {
      slug: "Action",
      title: "Películas de Acción",
      items: basicFetch(url_accion),
    },
  ];
};

*/

export default generarLista;
