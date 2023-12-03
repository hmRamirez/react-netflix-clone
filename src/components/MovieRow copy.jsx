import { useEffect, useState } from "react";
import generarLista from "../services/tmdb";

const MovieRow = () => {
  //const [first, setfirst] = useState(second);

  useEffect(() => {
    console.log(generarLista());
    /*const loadAll = async () => {
      let list = await getHomeList();
      console.log(list);
    };
    loadAll();*/
  }, []);

  return <div>MovieRow</div>;
};

export default MovieRow;
