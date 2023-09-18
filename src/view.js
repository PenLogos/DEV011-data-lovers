// estas funciones son de ejemplo

const cardContainer = document.querySelector(".contenedor");
export const renderItems = (pokemon) => {
  const li = document.createElement("li");
  cardContainer.appendChild(li);
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "pokemon");
  const pokemonImage = document.createElement("img");
  li.appendChild(pokemonImage);
  pokemonImage.setAttribute("itemprop", "img-pokemon");
  pokemonImage.src=pokemon.img;

  const pokemonName = document.createElement("dd");
  li.appendChild(pokemonName);
  pokemonName.setAttribute("itemprop", "name");
  pokemonName.innerHTML=pokemon.name;

  const pokemonType = document.createElement("dd");
  li.appendChild(pokemonType);
  pokemonType.setAttribute("itemprop", "type");
  pokemonType.innerHTML=(`Tipo: ${pokemon.type}`);


  const region = document.createElement("dt");
  li.appendChild(region);
  const pokemonRegion = document.createElement("dd");
  li.appendChild(pokemonRegion);
  pokemonRegion.setAttribute("itemprop", "name-region");
  const resistant = document.createElement("dt");
  li.appendChild(resistant);
  const pokemonResistant = document.createElement("dd");
  li.appendChild(pokemonResistant);
  pokemonResistant.setAttribute("itemprop", "resistant");
  const weaknesses = document.createElement("dt");
  li.appendChild(weaknesses);
  const pokemonWeaknesses = document.createElement("dd");
  li.appendChild(pokemonWeaknesses);
  pokemonWeaknesses.setAttribute("itemprop", "weaknesses");
  const evolutionImage1 = document.createElement("img");
  li.appendChild(evolutionImage1);
  evolutionImage1.setAttribute("itemprop", "img-evolution");
  const evolution1 = document.createElement("img");
  li.appendChild(evolution1);
  evolution1.setAttribute("itemprop", "evoluciones");
  const evolutionImage2 = document.createElement("dd");
  li.appendChild(evolutionImage2);
  evolutionImage2.setAttribute("itemprop", "img-evolution");
  const evolution2 = document.createElement("dd");
  li.appendChild(evolution2);
  evolution2.setAttribute("itemprop", "evoluciones");
  const pokemonCandycost = document.createElement("dd");
  li.appendChild(pokemonCandycost);
  pokemonCandycost.setAttribute("itemprop", "candy-cost");
  const spawnChance = document.createElement("dt");
  li.appendChild(spawnChance);
  const pokemonSpawnChance = document.createElement("dd");
  li.appendChild(pokemonSpawnChance);
  pokemonSpawnChance.setAttribute("itemprop", "spawn-chance");
};
