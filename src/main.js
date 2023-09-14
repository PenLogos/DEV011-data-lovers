import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/pokemon/pokemon.js';

const newelement = document.createElement('dd');
const selectelement = document.querySelector(".tarjeta");
selectelement.appendChild(newelement);

const newelement2 = document.createElement('dt');
const selectelement2 = document.querySelector(".tarjeta");
selectelement2.appendChild(newelement2);


const selectDataArray = (data.pokemon.at(6))

const pokemonname = selectDataArray.name
const selectnewelement = document.querySelector('dd')
selectnewelement.innerHTML = (example, renderItems, pokemonname)

const pokemontype = selectDataArray.type
const selectnewelement2 = document.querySelector('dt')
selectnewelement2.innerHTML = (example, renderItems, pokemontype)
//selectnewelement.(example, renderItems, data)

console.log(example, renderItems, data);
