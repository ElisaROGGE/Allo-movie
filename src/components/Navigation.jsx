import React from 'react';
import { NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
    <>
        <div className="header bg-amber-400 flex justify-around items-center">
            <NavLink to="/home" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li className='mr-2 hover:underline text-3xl list-none'>Accueil</li>
            </NavLink>
            <NavLink to='/home'>
                <h1 className='text-5xl font-bold p-2 text-center'>Allo Movie</h1>
            </NavLink>
                    <ul>
                        <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className='hover:underline text-3xl list-none'>Favoris</li>
                        </NavLink>
                    </ul>
        </div>
    </>
    );
};

export default Navigation;