import React from 'react';
import { NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
    <>
        <div className="header bg-amber-400">
            <NavLink to='/home'>
                <h1 className='text-3xl p-2'>Allo Movie</h1>
            </NavLink>
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