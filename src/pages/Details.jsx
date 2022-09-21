import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';


const API_IMG="https://image.tmdb.org/t/p/w500/";
const Details = ({}) => {
    const param= useParams();
    const API_URL=`https://api.themoviedb.org/3/movie/${param.id}?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr`
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(API_URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMovie(data)
        })
    }, [])
    console.log(movie)
    return (
        <div>
            <div className="header bg-amber-400">
                <h1 className='text-3xl'>Allo Movie</h1>
                <Navigation />
            </div>
            <div className='detail'>
            <h1 className="text-7xl font-bold underline text-amber-400">{movie.title}</h1>
                <img src={API_IMG+movie.poster_path} />
                <div className="genre">
                    [{movie.genres}]
                </div>
                <p>Sorti au cinéma le {movie.release_date}</p>
                <p>{movie.overview}</p>
                <div className='rate'>
                    Note: {movie.vote_average}/10
                </div>
            </div>
        </div>
        
    );
};

export default Details;