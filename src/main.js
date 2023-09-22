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
const cardContainer = document.querySelector(".contenedor");

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

const filters = {
  type:"",
  resistant:"",
  weakness:"",
};

selectFilterType.addEventListener("change", ()=> { 
  filters.type = selectFilterType.value;
  updateFilteredResults();
  // selectFilterName.textContent= "busca por nombre de pokémon";
});

selectFilterResistant.addEventListener("change", ()=> { 
  filters.resistant= selectFilterResistant.value;
  updateFilteredResults();
});

selectFilterWeakness.addEventListener("change", ()=> { 
  filters.weakness= selectFilterWeakness.value;
  updateFilteredResults();
});

function updateFilteredResults(){
  const filteredResults = applyFilters(data.pokemon);
  cardContainer.innerHTML="";
  filteredResults.forEach(renderItems);
  selectFilterName.value = "";
}

function applyFilters(pokemonList) {
  return pokemonList.filter((pokemon) => {
    const typeFilter = filters.type === "" || pokemon.type.includes(filters.type);
    const resistantFilter = filters.resistant === "" || pokemon.resistant.includes(filters.resistant);
    const weaknessFilter = filters.weakness === "" || pokemon.weaknesses.includes(filters.weakness);
    return typeFilter && resistantFilter && weaknessFilter;
  });
}

selectFilterName.addEventListener("change", ()=> { 
  const resultFilterName = typeFilter(selectPokemon, "name", selectFilterName.value);
  cardContainer.innerHTML="";
  resultFilterName.forEach(renderItems);
  console.log(resultFilterName);
});