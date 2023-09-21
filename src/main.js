import { typeFilter } from './dataFunctions.js';
import { renderItems } from "./view.js";

import data from "./data/pokemon/pokemon.js";

// console.log(data.pokemon)
const selectPokemon = data.pokemon;
const selectFilterType = document.querySelector("select[name=type]");
const selectFilterResistant = document.querySelector("select[name=resistant-to]");
const selectFilterWeakness = document.querySelector("select[name=weak-to]");

const arrayTypeValues = Object.values(selectPokemon).flatMap(
  (item) => item.type
);
const cleanArrayTypeValues = [...new Set(arrayTypeValues)];

function createOption(value) {
  const optionType = document.createElement("option");
  selectFilterType.appendChild(optionType);
  optionType.innerHTML = value;
  optionType.setAttribute("class", "type-filter");
  optionType.setAttribute("value", optionType.value);
  const optionResistant = document.createElement("option");
  selectFilterResistant.appendChild(optionResistant );
  optionResistant.innerHTML = value;
  optionResistant.setAttribute("value", optionResistant.value);
  const optionWeakness = document.createElement("option");
  selectFilterWeakness.appendChild(optionWeakness);
  optionWeakness.innerHTML = value;
  optionWeakness.setAttribute("value", optionWeakness.value);
}

cleanArrayTypeValues.forEach(createOption);

selectPokemon.forEach(renderItems);

selectFilterType.addEventListener("change", ()=> { 
  // console.log(selectFilterType.value);
  // console.log(selectPokemon);
  // console.log(data.pokemon[0].type);
  const resultFilter = typeFilter(selectPokemon, "type", selectFilterType.value)
  console.log(resultFilter);
});