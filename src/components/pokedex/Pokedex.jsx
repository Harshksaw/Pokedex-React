// import React from "react";

import './Pokedex.css'
import Search from '../search/Search.jsx'
import PokemonList from '../PokemonList.jsx/PokemonList';
export default function Pokedex() {
  return (
    <>
      <div className='pokedex-wrapper'>
        
        <Search/>
        <PokemonList/>

      </div>
    </>
  );
}
   