import { dataFilter } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/pokemon/pokemon.js";

// console.log(data.pokemon)
const selectPokemon = data.pokemon;
const selectFilterType = document.querySelector("select[name=type]");
const selectFilterResistant = document.querySelector(
  "select[name=resistant-to]"
);
const selectFilterWeakness = document.querySelector("select[name=weak-to]");
const selectFilterName = document.querySelector("input[type=text]");
const cardContainer = document.querySelector(".contenedor");

const arrayTypeValues = Object.values(selectPokemon).flatMap(
  (item) => item.type
);

const cleanArrayTypeValues = arrayTypeValues.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
// const cleanArrayTypeValues = [...new Set(arrayTypeValues)];

function createOption(value) {
  const optionType = document.createElement("option");
  selectFilterType.appendChild(optionType);
  optionType.innerHTML = value;
  optionType.setAttribute("class", "type-filter");
  optionType.setAttribute("value", optionType.value);
  const optionResistant = document.createElement("option");
  selectFilterResistant.appendChild(optionResistant);
  optionResistant.innerHTML = value;
  optionResistant.setAttribute("value", optionResistant.value);
  const optionWeakness = document.createElement("option");
  selectFilterWeakness.appendChild(optionWeakness);
  optionWeakness.innerHTML = value;
  optionWeakness.setAttribute("value", optionWeakness.value);
}

selectPokemon.forEach(renderItems);

cleanArrayTypeValues.forEach(createOption);

selectFilterType.addEventListener("change", () => {
  const resultFilterType = dataFilter(
    selectPokemon,
    "type",
    selectFilterType.value
  );
  cardContainer.innerHTML = "";
  resultFilterType.forEach(renderItems);
  console.log(resultFilterType);
});

selectFilterResistant.addEventListener("change", () => {
  const resultFilterResistant = dataFilter(
    selectPokemon,
    "resistant",
    selectFilterResistant.value
  );
  cardContainer.innerHTML = "";
  resultFilterResistant.forEach(renderItems);
  console.log(resultFilterResistant);
});

selectFilterWeakness.addEventListener("change", () => {
  const resultFilterWeakness = dataFilter(
    selectPokemon,
    "weaknesses",
    selectFilterWeakness.value
  );
  cardContainer.innerHTML = "";
  resultFilterWeakness.forEach(renderItems);
  console.log(resultFilterWeakness);
});

selectFilterName.addEventListener("change", () => {
  const resultFilterName = dataFilter(
    selectPokemon,
    "name",
    selectFilterName.value
  );
  cardContainer.innerHTML = "";
  resultFilterName.forEach(renderItems);
  console.log(resultFilterName);
});

// const filters = {
//   type:"",
//   resistant:"",
//   weakness:"",
// };

// function updateFilteredResults(){
//   const filteredResults = applyFilters(data.pokemon);
//   cardContainer.innerHTML="";
//   filteredResults.forEach(renderItems);
//   selectFilterName.value = "";
// }

// function applyFilters(pokemonList) {
//   return pokemonList.filter((pokemon) => {
//     const typeFilter = filters.type === "" || pokemon.type.includes(filters.type);
//     const resistantFilter = filters.resistant === "" || pokemon.resistant.includes(filters.resistant);
//     const weaknessFilter = filters.weakness === "" || pokemon.weaknesses.includes(filters.weakness);
//     return typeFilter && resistantFilter && weaknessFilter;
//   });
// }
