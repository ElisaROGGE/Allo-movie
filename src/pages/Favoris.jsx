import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import {movies} from '../components/getMovies';

const API_IMG="https://image.tmdb.org/t/p/w500/";
const Favoris = () => {
    let data = JSON.parse(localStorage.getItem("movies-app") || "[]");
    const [movies, setMovies] = useState([...data]);
    return(
    <>
    <Navigation />
        <div className="main">
            <div className="row">
                <div className="fav">
                    {
                        favoris.map((movieObj)=>(
                            <>
                                <div>{movieObj.original_title}</div>
                                <img classname="detail-image" src={API_IMG+movieObj.poster_path} />
                                <div className='delete'>
                                    <button type='button'>Supprimer des favoris</button>
                                </div>
                                
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
    )
};

export default Favoris;