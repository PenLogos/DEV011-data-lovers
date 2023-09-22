import { dataPokemonFilter } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from "./data/pokemon/pokemon.js";

// Lista de selectores
const selectPokemon = data.pokemon;
const selectFilterType = document.querySelector("select[name=type]");
const selectFilterResistant = document.querySelector("select[name=resistant-to]");
const selectFilterWeakness = document.querySelector("select[name=weak-to]");
const selectFilterName = document.querySelector("input[type=text]");
<<<<<<< HEAD
const cardContainer = document.querySelector(".contenedor")
=======
const cardContainer = document.querySelector(".contenedor");
>>>>>>> 7961ffa1a6a04ba8de24174dd071c7ae2990c640

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
<<<<<<< HEAD
  const resultFilterType = dataPokemonFilter(selectPokemon, "type", selectFilterType.value)
  cardContainer.innerHTML = ''
 resultFilterType.forEach(renderItems);
  console.log(resultFilterType);
  return resultFilterType
=======
  filters.type = selectFilterType.value;
  updateFilteredResults();
  // selectFilterName.textContent= "busca por nombre de pokémon";
>>>>>>> 7961ffa1a6a04ba8de24174dd071c7ae2990c640
});

selectFilterResistant.addEventListener("change", ()=> { 
<<<<<<< HEAD
  const resultFilterResistant = dataPokemonFilter(selectPokemon, "resistant", selectFilterResistant.value)
  cardContainer.innerHTML = ''
  resultFilterResistant.forEach(renderItems);
  console.log(resultFilterResistant);
=======
  filters.resistant= selectFilterResistant.value;
  updateFilteredResults();
>>>>>>> 7961ffa1a6a04ba8de24174dd071c7ae2990c640
});

selectFilterWeakness.addEventListener("change", ()=> { 
<<<<<<< HEAD
  const resultFilterWeakness = dataPokemonFilter(selectPokemon, "weaknesses", selectFilterWeakness.value)
  cardContainer.innerHTML = ''
  resultFilterWeakness.forEach(renderItems);
  console.log(resultFilterWeakness);
=======
  filters.weakness= selectFilterWeakness.value;
  updateFilteredResults();
>>>>>>> 7961ffa1a6a04ba8de24174dd071c7ae2990c640
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
<<<<<<< HEAD
  const resultFilterName = dataPokemonFilter(selectPokemon, "name", selectFilterName.value)
  cardContainer.innerHTML = ''
=======
  const resultFilterName = typeFilter(selectPokemon, "name", selectFilterName.value);
  cardContainer.innerHTML="";
>>>>>>> 7961ffa1a6a04ba8de24174dd071c7ae2990c640
  resultFilterName.forEach(renderItems);
  console.log(resultFilterName);
});

