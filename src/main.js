import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/pokemon/pokemon.js';

const selectPokemon = data.pokemon;
   
selectPokemon.forEach(renderItems);
// return(example, renderItems, data);
