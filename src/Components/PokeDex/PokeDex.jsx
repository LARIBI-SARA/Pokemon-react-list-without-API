import React from 'react';
import PokeCard from '../pokeCard/PokeCard';
import './PokeDex.css'
function PokeDex({pokeList}) {
    return (
        <div className="pokedex-style">
      {pokeList.map((pokemon, index) => (
        <PokeCard  key={index} name={pokemon.name} image={pokemon.image}/>
      ))}
    </div>
    );
}

export default PokeDex;