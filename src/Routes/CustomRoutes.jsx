
import { Routes, Route } from "react-router-dom"
import Pokedex from "../components/pokedex/Pokedex"
import PokemonDetails from "../components/pokemondetails/pokemondetails"



export default function CustomRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path ="/pokemon/:id" element ={<PokemonDetails /> } />
    </Routes>
        
  )
}
