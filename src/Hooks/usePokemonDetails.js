import axios from "axios";

import usePokemonList from "./usePokemonList";
import { useEffect, useState } from "react";

export default function usePokemonDetails(id) {
  const [pokemon, setPokemon] = useState({});

  async function downloadPokemon() {
    // Corrected function name to 'downloadPokemon'

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //ON the basis of Its Type Taking similar Pokemon
    const pokemonOfSameTypes = await axios.get(
      `https://pokeapi.co/api/v2/type/${
        response.data.types ? response.data.types[0].type.name : ""
      }`
    );

    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default, // Corrected image URL path
      height: response.data.height, // Corrected height property
      weight: response.data.weight, // Added weight property
      types: response.data.types.map((t) => t.type.name),
      similarPokemons: pokemonOfSameTypes.data.pokemon,
    });
    console.log(response.data.types);
    setPokemonListState({
      ...PokemonListState,
      type: response.data.types ? response.data.types[0].type.name : "",
    });
  }
  const [PokemonListState, setPokemonListState] = usePokemonList();
  useEffect(() => {
    downloadPokemon();
    console.log("LIST", pokemon.types, PokemonListState);
  }, []); // Added 'id' to the dependency array

  return [pokemon];
}
