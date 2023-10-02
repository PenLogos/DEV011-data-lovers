import { dataFilter } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/pokemon/pokemon.js";

const selectPokemon = data.pokemon;
const selectFilterType = document.querySelector("select[id=type]");
const selectFilterResistant = document.querySelector("select[id=resistant-to]");
const selectFilterWeakness = document.querySelector("select[id=weak-to]");
const selectFilterName = document.querySelector("input[type=text]");
const cardContainer = document.querySelector(".contenedor");
const selectSort = document.querySelector("select[name=name]");
// const selectSortValueAsc = document.querySelector("input[value=asc]");
// const selectSortValueDesc = document.querySelector("input[value=desc]");
const computeStatsP = document.querySelector("#compute-stats-result");
const cleanButton = document.querySelector("button[data-testid=button-clear]")

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
  // optionType.setAttribute("class", "type-filter");
  optionType.setAttribute("value", optionType.value);
  const optionResistant = document.createElement("option");
  selectFilterResistant.appendChild(optionResistant);
  optionResistant.innerHTML = value;
  optionResistant.setAttribute("value", optionResistant.value);
  const optionWeakness = document.createElement("option");
  selectFilterWeakness.appendChild(optionWeakness);
  optionWeakness.innerHTML = value;
  optionWeakness.setAttribute("value", optionWeakness.value);
  return optionType, optionResistant, optionWeakness
}

selectPokemon.forEach(renderItems);

cleanArrayTypeValues.forEach(createOption);

const filteredResults = {
  type: [],
  resistant: [],
  weaknesses: [],
};



const applyFilter = (filterName, selectedValue) => {
  let filterIntersection = [...selectPokemon];
  selectFilterName.value = "";
  filteredResults[filterName] = dataFilter(selectPokemon, filterName, selectedValue);
  cardContainer.innerHTML = "";
  for (const filter in filteredResults) {
    if (filteredResults[filter].length > 0) {
      filterIntersection = filterIntersection.filter((element) =>
        filteredResults[filter].includes(element)
      );
    }
  }
  if (filterIntersection.length > 0) {
    return filterIntersection.forEach(renderItems),
    computeStatsP.innerHTML = `Tasa de aparición media ${computeStats(filterIntersection, "spawn-chance")}`;
  } else {
    const noResults = document.createElement("p");
    cardContainer.appendChild(noResults);
    noResults.setAttribute("class", "message");
    noResults.innerHTML = "No hay pokemones así por atrapar, sigue buscando";
    return computeStatsP.innerHTML = "";
  }
};

selectFilterType.addEventListener("change", () => {
  const selectFilterTypeValue = selectFilterType.value;
  applyFilter("type", selectFilterTypeValue);
});
selectFilterResistant.addEventListener("change", () => {
  const selectFilterResistantValue = selectFilterResistant.value;
  applyFilter("resistant", selectFilterResistantValue);
});
selectFilterWeakness.addEventListener("change", () => {
  const selectFilterWeaknessValue= selectFilterWeakness.value;
  applyFilter("weaknesses", selectFilterWeaknessValue);
});

selectFilterName.addEventListener("change", () => {
  const resultFilterName = dataFilter(selectPokemon, "name", selectFilterName.value);
  cardContainer.innerHTML = "";
  if (resultFilterName.length > 0) {
    resultFilterName.forEach(renderItems);
  } else {
    const noName = document.createElement("p");
    cardContainer.appendChild(noName);
    noName.setAttribute("class", "message");
    noName.innerHTML = "Ningún pokemon se llama así, intenta de nuevo";
  }
});


let toOrder = [...selectPokemon];
const applyOrder = (filteredData, sortedBy, order) => {
  selectFilterName.value = "";
  filteredResults[sortedBy] = sortData(filteredData, sortedBy, order);
  cardContainer.innerHTML = "";
  for (const filter in filteredResults) {
    if (filteredResults[filter].length > 0) {
      toOrder = toOrder.filter((element) =>
        filteredResults[filter].includes(element)
      );
    }
  }
  toOrder.forEach(renderItems);
}

selectSort.addEventListener("change", () => {
  const selectedValue = selectSort.value
  if (selectedValue === "desc") {
  applyOrder(toOrder, "name", selectedValue)
  }
  else {
    applyOrder(toOrder, "name")
  }
});

// selectSortValueAsc.addEventListener("click", () => {
//   applyOrder(toOrder, "name")
// });

// selectSortValueDesc.addEventListener("click", () => {
//   applyOrder(toOrder, "name", selectSortValueDesc)
// });

cleanButton.addEventListener("click", cleanAll)

function cleanAll() {
  selectFilterName.value = ""
  selectFilterType.value = "grass"
  selectFilterResistant.value = "grass"
  selectFilterWeakness.value = "grass"
  selectSort.value = "asc"
  // selectSortValueAsc.checked = false
  // selectSortValueDesc.checked = false 
  computeStatsP.innerHTML = ""
  cardContainer.innerHTML = ""
  selectPokemon.forEach(renderItems)
}

