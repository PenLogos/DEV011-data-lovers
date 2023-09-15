import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/pokemon/pokemon.js';

const cardContainer = document.querySelector(".contenedor");
const selectPokemon = data.pokemon;
function createcard(pokemon) {
    const li = document.createElement('li');
    cardContainer.appendChild(li);
    const pokemonImage = document.createElement('img');
    li.appendChild(pokemonImage);
    const pokemonName = document.createElement('dd');
    li.appendChild(pokemonName);
    const type = document.createElement('dt');
    li.appendChild(type);
    const pokemonType = document.createElement('dd');
    li.appendChild(pokemonType);
    const region = document.createElement('dt');
    li.appendChild(region);
    const pokemonRegion = document.createElement('dd');
    li.appendChild(pokemonRegion);
    const resistant = document.createElement('dt');
    li.appendChild(resistant);
    const pokemonResistant = document.createElement('dd');
    li.appendChild(pokemonResistant);
    const weaknesses = document.createElement('dt');
    li.appendChild(weaknesses);
    const pokemonWeaknesses = document.createElement('dd');
    li.appendChild(pokemonWeaknesses);
    const evolutionImage1 = document.createElement('img');
    li.appendChild(evolutionImage1);
    const evolution1 = document.createElement('img');
    li.appendChild(evolution1);
    const evolutionImage2 = document.createElement('dd');
    li.appendChild(evolutionImage2);
    const evolution2 = document.createElement('dd');
    li.appendChild(evolution2);
    const pokemonCandycost = document.createElement('dd');
    li.appendChild(pokemonCandycost);
    const spawnChance = document.createElement('dt');
    li.appendChild(spawnChance);
    const pokemonSpawnChance = document.createElement('dd');
    li.appendChild(pokemonSpawnChance);
}
selectPokemon.forEach(createcard)
//console.log(example, renderItems, data);