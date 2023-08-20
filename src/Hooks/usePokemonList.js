import axios from "axios";
import { useEffect, useState } from "react";

export default function usePokemonList() {
  const [PokemonListState, setPokemonListState] = useState({
    PokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nexturl: "",
    prevurl: "",

  });

  async function downloadPokemons() {
    // try {

    setPokemonListState((state) => ({ ...state, isLoading: true }));

    const response = await axios.get(PokemonListState.pokedexUrl); //this downloads the data

    const pokemonresults = response.data.results;

    console.log("Response Is ", response.data.pokemon);
    // console.log(PokemonListState)

    //updating the same state
    setPokemonListState((state) => ({
      ...state,
      nexturl: response.data.next,
      prevurl: response.data.prev,
    }));

    const pokemonresultpromise = pokemonresults.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const pokemonData = await axios.all(pokemonresultpromise);
    const pokelistres = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });

    // between two renders update multiple states
    setPokemonListState((state) => ({
      ...state,
      PokemonList: pokelistres,
      isLoading: false,
    }));

    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  }
  useEffect(() => {
    downloadPokemons();
  }, [PokemonListState.pokedexUrl]);

  return [PokemonListState, setPokemonListState];
}
