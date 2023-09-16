import React from 'react';
import './PokeCard.css'
function PokeCard({name,image}) {
    return (
        <div className='pokeCard-container'>
           
            <img src={image} alt={name} />
           
       <p>{name}</p>
        </div>
    );
}

export default PokeCard;