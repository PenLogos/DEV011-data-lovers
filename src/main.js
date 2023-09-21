import { typeFilter } from './dataFunctions.js';
import { renderItems } from "./view.js";

import data from "./data/pokemon/pokemon.js";

console.log(data.pokemon)
const selectPokemon = data.pokemon;
const main = document.querySelector(".filters");

const labelFilterType = document.createElement("label");
main.appendChild(labelFilterType);
labelFilterType.setAttribute("class", "filter");
labelFilterType.setAttribute("for", "type");
labelFilterType.innerHTML = "Tipo";

const selectType = document.createElement("select");
labelFilterType.appendChild(selectType);
labelFilterType.setAttribute("name", "type");
labelFilterType.setAttribute("data-testid", "select-filter");

const labelFilterResistant = document.createElement("label");
main.appendChild(labelFilterResistant);
labelFilterResistant.setAttribute("class", "filter");
labelFilterResistant.setAttribute("for", "resistant-to");
labelFilterResistant.innerHTML = "Resiste a";

const selectResistant = document.createElement("select");
labelFilterResistant.appendChild(selectResistant);
labelFilterResistant.setAttribute("name", "resistant-to");
labelFilterResistant.setAttribute("data-testid", "select-filter");

const labelFilterWeakness = document.createElement("label");
main.appendChild(labelFilterWeakness);
labelFilterWeakness.setAttribute("class", "filter");
labelFilterWeakness.setAttribute("for", "weak-to");
labelFilterWeakness.innerHTML = "Débil a";

const selectWeakness = document.createElement("select");
labelFilterWeakness.appendChild(selectWeakness );
labelFilterWeakness.setAttribute("name", "weak-to");
labelFilterWeakness.setAttribute("data-testid", "select-filter");

const arrayTypeValues = Object.values(selectPokemon).flatMap(
  (item) => item.type
);
const cleanArrayTypeValues = [...new Set(arrayTypeValues)];

function createOption(value) {
  const optionType = document.createElement("option");
  selectType.appendChild(optionType);
  optionType.innerHTML = value;
  optionType.setAttribute("class", "type-filter");
  const optionResistant = document.createElement("option");
  selectResistant.appendChild(optionResistant );
  optionResistant.innerHTML = value;
  const optionWeakness = document.createElement("option");
  selectWeakness.appendChild(optionWeakness);
  optionWeakness.innerHTML = value;
}

cleanArrayTypeValues.forEach(createOption);

selectPokemon.forEach(renderItems);

// const selectTypeOption = document.querySelectorAll(".type-filter");
// selectTypeOption.forEach(option => {option.addEventListener("click", typeFilter() {
//    console.log("Hola")
// })});

