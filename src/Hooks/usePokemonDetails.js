import axios from "axios";


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function usePokemonDetails(pokemonName) {
  const {id} = useParams();
  const [pokemon, setPokemon] = useState({});

  async function downloadPokemon(id) {
    try {
      let response;

      if (pokemonName) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
      } else {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }

      //ON the basis of Its Type Taking similar Pokemon
      const pokemonOfSameTypes = await axios.get(
        `https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`
      );

      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default, // Corrected image URL path
        height: response.data.height, // Corrected height property
        weight: response.data.weight, // Added weight property
        types: response.data.types.map((t) => t.type.name),
        similarPokemons: pokemonOfSameTypes.data.pokemon,
      });

      setPokemonListState({
        ...PokemonListState,
        type: response.data.types ? response.data.types[0].type.name : " ",
      });
    } catch (error) {
      console.log("Something in usePokemondetails hooks");
    }
  }

  const [PokemonListState, setPokemonListState] = useState({});
  useEffect(() => {
    downloadPokemon(id);

  }, [id]); // Added 'id' to the dependency array

  return [pokemon];
}
