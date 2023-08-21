import React from "react";


import "./Search.css";



export default function Search({updateSearchTerm}) {



  return (
    <>
      <div className='search-wrapper'>
        <input
          id="pokemon-name-search"
          type="text"
          placeholder="pokemon name ..."

          onChange = {(e)=> updateSearchTerm(e.target.value)}
        />

      </div>
    </>
  );
}
