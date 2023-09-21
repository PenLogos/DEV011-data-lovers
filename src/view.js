// estas funciones son de ejemplo
const cardContainer = document.querySelector(".contenedor");
export const renderItems = (pokemon) => {
  const li = document.createElement("li");
  cardContainer.appendChild(li);
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "pokemon");
   
  const pokemonName = document.createElement("dd");
  li.appendChild(pokemonName);
  pokemonName.setAttribute("itemprop", "name");
  pokemonName.innerHTML = pokemon.name;
  
  const pokemonImage = document.createElement("img");
  li.appendChild(pokemonImage);
  pokemonImage.setAttribute("itemprop", "img-pokemon");
  pokemonImage.src = pokemon.img;
   
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

  // const evolutionImage1 = document.createElement("img");
  // li.appendChild(evolutionImage1);
  // evolutionImage1.setAttribute("itemprop", "img-evolution");
  // const evolution1 = document.createElement("dd");
  // li.appendChild(evolution1);
  // evolution1.setAttribute("itemprop", "evoluciones");
  // if (pokemon.evolution['next-evolution'][0]['next-evolution']) {
  //   evolution1.innerHTML = (`evolución 1: ${pokemon.evolution['next-evolution'][0].name}`)
  // }
  // else if (pokemon.evolution['next-evolution'] && pokemon.evolution['prev-evolution']) {
  //   evolution1.innerHTML = (`preevolución: ${pokemon.evolution['prev-evolution'][0].name}`)
  // }
  // else if (pokemon.evolution['prev-evolution'][0]['prev-evolution']) {
  //   evolution1.innerHTML = (`preevolución 1 ${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].name}`)
  // }
  
  // const pokemonCandycost1 = document.createElement("dd");
  // li.appendChild(pokemonCandycost1);
  // pokemonCandycost1.setAttribute("itemprop", "candy-cost");
  // if (pokemon.evolution['next-evolution'][0]['next-evolution']) {
  //   pokemonCandycost1.innerHTML = (`x${pokemon.evolution['next-evolution'][0]['candy-cost']}`)
  // }
  // const evolutionImage2 = document.createElement("img");
  // li.appendChild(evolutionImage2);
  // evolutionImage2.setAttribute("itemprop", "img-evolution");
  
  // const evolution2 = document.createElement("dd");
  // li.appendChild(evolution2);
  // evolution2.setAttribute("itemprop", "evoluciones");
  // if (pokemon.evolution['next-evolution'][0]['next-evolution']) {
  //   evolution2.innerHTML = (`evolución 2: ${pokemon.evolution['next-evolution'][0]['next-evolution'][0].name}`)
  // }
  // else if (pokemon.evolution['prev-evolution'] && pokemon.evolution['next-evolution']) {
  //   evolution2.innerHTML = (`evolución: ${pokemon.evolution['next-evolution'][0].name}`)
  // }
  // else if (pokemon.evolution['prev-evolution'][0]['prev-evolution']) {
  //   console.log('se cumple la condición')
  //   evolution2.innerHTML = (`preevolución 2: ${pokemon.evolution['prev-evolution'][0].name}`)
  // }
  const pokemonCandycost2 = document.createElement("dd");
  li.appendChild(pokemonCandycost2);
  pokemonCandycost2.setAttribute("itemprop", "candy-cost");
  if (pokemon.evolution['prev-evolution'] && pokemon.evolution['next-evolution']) {
    pokemonCandycost2.innerHTML = (`x${pokemon.evolution['next-evolution'][0]['candy-cost']}`)
  }
  const pokemonSpawnChance = document.createElement("dd");
  li.appendChild(pokemonSpawnChance);
  pokemonSpawnChance.setAttribute("itemprop", "spawn-chance");
  pokemonSpawnChance.innerHTML = (`Tasa de aparición: ${pokemon['spawn-chance']}`)
}
