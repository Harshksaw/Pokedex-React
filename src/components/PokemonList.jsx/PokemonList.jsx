// import { useEffect, useState } from "react";
// import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/pokemon";
import usePokemonList from "../../Hooks/usePokemonList";  //custom hook
 
export default function PokemonList() {
  //to use custom hooks ->

  const [PokemonListState, setPokemonListState ] = usePokemonList(false);

  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div>
      <div className="pokemon-wrapper">
        {(PokemonListState.isLoading)
          ? 'Loading...'
          : PokemonListState.PokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={PokemonListState.prevurl == null}
          onClick={() => {
            const Urltoset = PokemonListState.prevurl;
            setPokemonListState({ ...PokemonListState, pokedexUrl: Urltoset });
          }}
        >
          Prev
        </button>
        <button
          disabled={PokemonListState.nexturl == null}
          onClick={() => {
            const Urltoset = PokemonListState.nexturl;
            setPokemonListState({ ...PokemonListState, pokedexUrl: Urltoset });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
