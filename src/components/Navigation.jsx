import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';


const Navigation = () => {
    
    
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
                        
                        
                    </ul>
            </div>
        </div>
    </>
    );
};

export default Navigation;