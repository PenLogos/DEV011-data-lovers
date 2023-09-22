import { typeFilter } from './dataFunctions.js';
import { renderItems } from "./view.js";
import { anotherExample } from './dataFunctions.js';

import data from "./data/pokemon/pokemon.js";

// console.log(data.pokemon)
const selectPokemon = data.pokemon;
const selectFilterType = document.querySelector("select[name=type]");
const selectFilterResistant = document.querySelector("select[name=resistant-to]");
const selectFilterWeakness = document.querySelector("select[name=weak-to]");
const selectFilterName = document.querySelector("input[type=text]");

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

selectPokemon.forEach(renderItems);

cleanArrayTypeValues.forEach(createOption);

selectFilterType.addEventListener("change", ()=> { 
  const resultFilterType = typeFilter(selectPokemon, "type", selectFilterType.value)
  console.log(resultFilterType);
});
selectFilterResistant.addEventListener("change", ()=> { 
  const resultFilterResistant = typeFilter(selectPokemon, "resistant", selectFilterResistant.value)
  console.log(resultFilterResistant);
});
selectFilterWeakness.addEventListener("change", ()=> { 
  const resultFilterWeakness = typeFilter(selectPokemon, "weaknesses", selectFilterWeakness.value)
  console.log(resultFilterWeakness);
});
selectFilterName.addEventListener("change", ()=> { 
  const resultFilterName = typeFilter(selectPokemon, "name", selectFilterName.value)
  console.log(resultFilterName);
});