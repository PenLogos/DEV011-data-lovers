//import { typeFilter } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/pokemon/pokemon.js';

const main = document.querySelector(".filters");

const labelFilterType = document.createElement("label");
main.appendChild(labelFilterType);
labelFilterType.setAttribute('class', 'filter')
labelFilterType.setAttribute('for', 'type')
labelFilterType.innerHTML = 'Tipo'

const selectType = document.createElement("select");
labelFilterType.appendChild(selectType);
labelFilterType.setAttribute('name', 'type');
labelFilterType.setAttribute('data-testid', 'select-filter');

// const optionType = document.createElement("option");
// selectType.appendChild(optionType);
// labelFilterType.setAttribute('value', '');


// for (let i = 0; i > data.pokemon.length; i++) {
//     if (i === type) {
//         let filters = 
//     }
// }

const selectPokemon = data.pokemon;
selectPokemon.forEach(renderItems);






