import React, { useState } from 'react';
import PokeDex from './Components/PokeDex/PokeDex';

function App() {
const pokemons=[
 {
  index:0,
  image:"../public/one.png",
  name:"bulbasaur",
 },
 {
  index:1,
  image:"../public/2.png",
  name:"ivysaur",
 },
 {
  index:2,
  image:"../public/3.png",
  name:"venusaur",
 },
 {
  index:3,
  image:"../public/4.png",
  name:"charmander",
 },
 {
  index:4,
  image:"../public/5.png",
  name:"charmeleon",
 },
 {
  index:5,
  image:"../public/6.png",
  name:"charizard",
 },
 {
  index:6,
  image:"../public/7.png",
  name:"squirtle",
 },
 {
  index:7,
  image:"../public/8.png",
  name:"wartortle",
 },
 {
  index:8,
  image:"../public/9.png",
  name:"blastoise",
 },
 {
  index:9,
  image:"../public/10.png",
  name:"caterpie",
 }, 
 {
  index:10,
  image:"../public/11.png",
  name:"metapod",
 },
 {
  index:11,
  image:"../public/12.png",
  name:"butterfree",
 }
 

]

  const [pokeList,setPokeList] = useState(pokemons)
  return (
    <div>
      <PokeDex pokeList={pokeList}/>
    </div>
  );
}

export default App;