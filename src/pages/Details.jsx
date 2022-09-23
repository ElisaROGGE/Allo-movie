import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';


const API_IMG="https://image.tmdb.org/t/p/w500/";
const Details = ({}) => {
    const param= useParams();
    const API_URL=`https://api.themoviedb.org/3/movie/${param.id}?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr`
    const [movie, setMovie] = useState({});
    const [favourites, setFavourite] = useState(['']);
    useEffect(() => {
        fetch(API_URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMovie(data)
        })
    }, [])
    function handleFavourites(movie){
        /* Obtenir les données de localStorage et les analyser dans un tableau. */
        let oldData = JSON.parse(localStorage.getItem('movies-app') || "[]");
        if(favourites.includes(movie.id)){
            /* Filtrer le tableau oldData et renvoyer un nouveau tableau avec le movie.id supprimé. */
            oldData = oldData.filter((m)=>m.id!=movie.id);
        }else{
            oldData.push(movie);
        }
        localStorage.setItem('movies',JSON.stringify(oldData));
        console.log(oldData);
        // handleFavouritesState();
    }
    // function handleFavouritesState(){
    //     let oldData = JSON.parse(localStorage.getItem('movies-app') || "[]");
    //     let temp = oldData.map((movie)=>movie.id);
    //     setFavourite({
    //         favourites: [...temp]
    //     });
    // }
    return (
        <div>
            <Navigation />
            <h2 className="text-7xl text-center font-bold text-amber-400 mb-8">{movie.title}</h2>
            <div className='detail flex'>
                <div className="poster-image ml-8">
                    <img classname="detail-image" src={API_IMG+movie.poster_path} />
                </div>
                <div className="header-poster bg-amber-100 mx-8">
                    <div className="content mx-8">
                        <div className='genres flex'>
                        {/* On fait une boucle pour générer le tableau de genres */}
                        {movie.genres?.map((obj, index) => {
                            return(
                                <div className="genre mr-8">{movie.genres[index].name}</div>
                            )
                        })}
                        <p>{movie.runtime} min</p>
                    </div>
                    <p>Sorti au cinéma le {movie.release_date}</p>
                    <div className="synopsis">
                        <h3 className='text-2xl font-semibold'>Synopsis</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='rate'>
                        Note: {movie.vote_average}/10
                    </div>
                    <div className="fav">
                        <div className="w-fit-content my-7 bg-red-300 rounded-md px-3 py-3 transition delay-200 hover:scale-125"> 
                            <button type='button' onClick={()=>handleFavourites(movie)}>{favourites.includes(movie.id)?"Supprimer des favoris":"Ajouter aux favoris"}</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Details;