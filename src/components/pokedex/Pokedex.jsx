// import React from "react";

import './Pokedex.css'
import Search from '../search/Search.jsx'
import PokemonList from '../PokemonList.jsx/PokemonList';
import { useEffect, useState } from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
export default function Pokedex() {

  const [searchTerm, setSearchterm] = useState('')


  return (
    <>
      <div className='pokedex-wrapper'>
        
        <Search updateSearchTerm = {setSearchterm}/>
        {/* //conditional rendering */}
        {(searchTerm.length == 0)? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName = {searchTerm}/>}
     

      </div>
    </>
  );
}
   