import { dataFilter } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/pokemon/pokemon.js";

const selectPokemon = data.pokemon;
const selectFilterType = document.querySelector("select[name=type]");
const selectFilterResistant = document.querySelector("select[name=resistant-to]");
const selectFilterWeakness = document.querySelector("select[name=weak-to]");
const selectFilterName = document.querySelector("input[type=text]");
const cardContainer = document.querySelector(".contenedor");

const arrayTypeValues = Object.values(selectPokemon).flatMap(
  (item) => item.type
);

const cleanArrayTypeValues = arrayTypeValues.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

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

const filteredResults = {
  type: [],
  resistant: [],
  weaknesses: [],
};

const applyFilter = (filterName, selectedValue) => {
  selectFilterName.value = "";
  filteredResults[filterName] = dataFilter(selectPokemon, filterName, selectedValue);
  cardContainer.innerHTML = "";
  let filterIntersection = [...selectPokemon];
  for (const filter in filteredResults) {
    if (filteredResults[filter].length > 0) {
      filterIntersection = filterIntersection.filter((element) =>
        filteredResults[filter].includes(element)
      );
    }
  }
  if (filterIntersection.length > 0) {
    filterIntersection.forEach(renderItems);
  } else {
    const noResults = document.createElement("p");
    cardContainer.appendChild(noResults);
    noResults.setAttribute("class", "message")
    noResults.innerHTML = "No hay pokemones así por atrapar, sigue buscando"
  }
};
selectFilterType.addEventListener("change", () => {
  applyFilter("type", selectFilterType.value);
});
selectFilterResistant.addEventListener("change", () => {
  applyFilter("resistant", selectFilterResistant.value);
});
selectFilterWeakness.addEventListener("change", () => {
  applyFilter("weaknesses", selectFilterWeakness.value);
});
selectFilterName.addEventListener("change", () => {
  const resultFilterName = dataFilter(selectPokemon, "name", selectFilterName.value);
  cardContainer.innerHTML = "";
  resultFilterName.forEach(renderItems);
});

