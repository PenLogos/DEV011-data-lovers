// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';

const cardContainer = document.querySelector(".contenedor");
export const renderItems = (pokemon) => {
  const li = document.createElement("li");
  cardContainer.appendChild(li);
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "pokemon");
  const pokemonImage = document.createElement("img");
  li.appendChild(pokemonImage);
  pokemonImage.setAttribute("itemprop", "img-pokemon");
  pokemonImage.src = pokemon.img;

  const pokemonName = document.createElement("dd");
  li.appendChild(pokemonName);
  pokemonName.setAttribute("itemprop", "name");
  pokemonName.innerHTML = pokemon.name;

  const pokemonType = document.createElement("dd");
  li.appendChild(pokemonType);
  pokemonType.setAttribute("itemprop", "type");
  pokemonType.innerHTML = (`Tipo: ${pokemon.type}`);


  const pokemonRegion = document.createElement("dd");
  li.appendChild(pokemonRegion);
  pokemonRegion.setAttribute("itemprop", "name-region");
  pokemonRegion.innerHTML = (`Región: ${pokemon.generation.name}`);

  const pokemonResistant = document.createElement("dd");
  li.appendChild(pokemonResistant);
  pokemonResistant.setAttribute("itemprop", "resistant");
  pokemonResistant.innerHTML = (`Fortalezas: ${pokemon.resistant}`);

  const pokemonWeaknesses = document.createElement("dd");
  li.appendChild(pokemonWeaknesses);
  pokemonWeaknesses.setAttribute("itemprop", "weaknesses");
  pokemonWeaknesses.innerHTML = (`Debilidades: ${pokemon.weaknesses}`)

  const evolutionImage1 = document.createElement("img");
  li.appendChild(evolutionImage1);
  evolutionImage1.setAttribute("itemprop", "img-evolution");

  console.log(pokemon)

  const evolution1 = document.createElement("dd");
  li.appendChild(evolution1);
  evolution1.setAttribute("itemprop", "evoluciones");
  evolution1.innerHTML = (pokemon.evolution['next-evolution']?pokemon.evolution['next-evolution'][0].name: pokemon.evolution['prev-evolution'][0].name)
  

  const evolutionImage2 = document.createElement("img");
  li.appendChild(evolutionImage2);
  evolutionImage2.setAttribute("itemprop", "img-evolution");

  const evolution2 = document.createElement("dd");
  li.appendChild(evolution2);
  evolution2.setAttribute("itemprop", "evoluciones");
  if (pokemon.evolution['next-evolution'][0]['next-evolution']) {
    evolution2.innerHTML = (pokemon.evolution['next-evolution'][0]['next-evolution'][0].name)
  }
  else if (['prev-evolution']&&['next-evolution']) {
    (['prev-evolution'][0].name)
  }
  else if (['prev-evolution'][0]['prev-evolution']) {
    (['prev-evolution'][0]['prev-evolution'][0].name)
  }
 

  const pokemonCandycost = document.createElement("dd");
  li.appendChild(pokemonCandycost);
  pokemonCandycost.setAttribute("itemprop", "candy-cost");

  const spawnChance = document.createElement("dt");
  li.appendChild(spawnChance);

  const pokemonSpawnChance = document.createElement("dd");|
  li.appendChild(pokemonSpawnChance);
  pokemonSpawnChance.setAttribute("itemprop", "spawn-chance");
};
