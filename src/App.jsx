import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './pages/Details';
import Favoris from './pages/Favoris';
import Home from './pages/Home';


function App() {
  return(
    <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path="/favoris" element={<Favoris/>} />
       <Route path="/details/:id" element={<Details/>} />
         {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
