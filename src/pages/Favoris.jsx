import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
// import { NavLink } from 'react-router-dom';

const API_IMG="https://image.tmdb.org/t/p/w500/";
const Favoris = ({}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        if(movies){
            setMovies(movies);
        }
    }, []);
    function deleteFavourite(movie){
        let oldData = JSON.parse(localStorage.getItem('movies'|| "[]"))
        if(oldData.findIndex(m=>m.id==movie.id)>-1){
            oldData = oldData.filter((m)=>m.id!=movie.id);
        }
        localStorage.setItem('movies',JSON.stringify(oldData));
        console.log(oldData);
        setMovies(oldData);
    }
    // const divRef = useRef()
    // let oldData = JSON.parse(localStorage.getItem('movies'|| "[]"))
    // const currentFavItems = document.getElementsByClassName('empty-fav');
    // if(oldData?.length == 0){
    //     currentFavItems.style.display = 'block';
    // }
    
    
    return(
    <>
    <Navigation />
        <div className="main">
            <div className="row">
                <div className="fav">
                    {
                        movies.length > 0 ?(
                            movies.map((movieObj)=>(
                            <div className=' bloc inline-block w-1/5 mx-1 align-center'>
                                {/* <NavLink to={`/details/${id}`}> */}
                                    <h2 classname="fav-title text-xl font-bold underline mb-6">{movieObj.original_title}</h2>
                                    <img classname="detail-image transition delay-200 hover:scale-125" src={API_IMG+movieObj.poster_path} />
                                {/* </NavLink> */}
                                <div className='delete text-center my-7 bg-red-400 rounded-md px-3 py-3 transition delay-200 hover:scale-125'>
                                    {/* On supprime l'élement sélectionné au click (chaque élément correspond à movieObj) */}
                                    <button type='button' onClick={()=>deleteFavourite(movieObj)}>Supprimer</button>
                                </div>
                            </div>
                        ))
                        ):(
                            <>
                                <h2 className='text-center'>Vous n'avez pas encore de films dans vos favoris</h2>
                            </>
                        )
                        
                    }
                    {/* <div className="empty-fav text-xl text-center" style={{display:'none'}}>Vous n'avez pas encore de films dans vos favoris</div> */}
                </div>
            </div>
        </div>
    </>
    )
};

export default Favoris;