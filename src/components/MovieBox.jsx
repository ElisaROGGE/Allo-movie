import React from 'react';
import { NavLink } from 'react-router-dom';

const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox = ({title, poster_path, id}) => {
    return (
        <div className='bloc inline-block mx-1 align-center'>
            <NavLink to={`/details/${id}`}>
                <h2 className="text-xl font-bold underline mb-6">{title}</h2>
                <img className="transition delay-200 hover:scale-105" src={API_IMG+poster_path} />
                <div className="button my-7 bg-amber-400 rounded-md px-3 py-3 transition delay-200 hover:scale-105"> 
                    <button type='button'>En savoir plus</button>
                </div>
            </NavLink> 
        </div>
    );
};

export default MovieBox;