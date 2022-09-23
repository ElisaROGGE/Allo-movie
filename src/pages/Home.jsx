import React, {useState, useEffect} from 'react';
import MovieBox from '../components/MovieBox';
import Navigation from '../components/Navigation';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr"
const Home = () => {
    const [movies, setMovies]=useState([]);
    useEffect(() => {
   /* Fetch() est une méthode utilisée pour récupérer les ressources d'un serveur. */
    fetch(API_URL)
    /* Une fonction de rappel qui est appelée lorsque la promesse est résolue. */
    .then((res)=>res.json())
    .then(data=>{
      /* Définition de l'état du tableau des films sur le tableau data.results. */
      setMovies(data.results);
    })
  })
  return (
        <><Navigation />
        <div className="movies text-center mt-6">
      {/* Une boucle qui affichera les films dans le tableau. */}
      {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq}/>)}
    </div></>
  );
};

export default Home;