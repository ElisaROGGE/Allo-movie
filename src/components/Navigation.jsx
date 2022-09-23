import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Navigation = () => {
    // const param= useParams;
    // const API_URL=`https://api.themoviedb.org/3/movie/${param.id}?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr`
    // const [searchmovie, setSearchMovie] = useState('');
    // useEffect(() => {
    //     fetch(API_URL)
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setSearchMovie(data)
    //     })
    // })
    return (
    <>
        <div className="header bg-amber-400">
            <h1 className='text-3xl'>Allo Movie</h1>
            <div className="navigation">
                    <ul className='flex justify-end'>
                        <NavLink to="/home" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className='mr-2 hover:underline'>Accueil</li>
                        </NavLink>
                        <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className='mr-2 hover:underline'>Favoris</li>
                        </NavLink>
                        {/* <input type="text" placeholder='Rechercher...' onChange={event=> {setSearchMovie(event.target.value)}}/>
                            {/* {API_URL.filter((val)=>{
                                if(searchmovie == ""){
                                    return val
                                }else if(val.title.toLowerCase().includes(searchmovie.toLowerCase())){
                                    return val
                                }
                            }).map((val, key)=>{
                                return(val.title)
                            })} */
                        }
                    </ul>
            </div>
        </div>
    </>
    );
};

export default Navigation;