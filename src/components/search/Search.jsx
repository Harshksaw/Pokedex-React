import React from "react";


import "./Search.css";
import useDebounce from "../../Hooks/useDebounce";



export default function Search({updateSearchTerm}) {

  let i = 0;
  const debouncedcallback = useDebounce((e)=> updateSearchTerm(e.target.value))
  return (
    <>
      <div className='search-wrapper'>
        <input
          id="pokemon-name-search"
          type="text"
          placeholder="pokemon name ..."

          onChange = {debouncedcallback}
        />

      </div>
    </>
  );
  
}
