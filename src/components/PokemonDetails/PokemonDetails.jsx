
import "./PokemonDetails.css";

import usePokemonDetails from "../../Hooks/usePokemonDetails";
import Pokemon from "../Pokemon/Pokemon";
export default function PokemonDetails({ pokemonName }) {
  // const { id } = useParams();
  // const [pokemon] = usePokemonDetails(id, pokemonName);
  const [pokemon, pokemonListState] = usePokemonDetails(pokemonName);
  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-details-name">
        Name: <span>{pokemon.name}</span>
      </div>
      <img
        className="pokemon-details-image"
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div className="pokemon-details-name">Height: {pokemon.height}</div>
      <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>
     


      
      {pokemon.types && pokemon.similarPokemon && 
        <div className="pokemon-details-names">

          <h2>More {pokemon.types[0]} Type Pokemon</h2>
          <ul>
            {pokemon.similarPokemon.map((p) => 
              <li key={p.pokemon.url}>{p.pokemon.name}</li>
              
            )}

          </ul>
        </div>
      }
    </div>
  );
}
