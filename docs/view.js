// estas funciones son de ejemplo
const cardContainer = document.querySelector(".contenedor");
export const renderItems = (pokemon) => {
  const li = document.createElement("li");
  cardContainer.appendChild(li);
  li.setAttribute("itemscope", "");
  li.setAttribute("itemtype", "pokemon");
  li.setAttribute("class", "cards");

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
  pokemonType.innerHTML = `Tipo: ${pokemon.type}`;
  const pokemonRegion = document.createElement("dd");

  const types = pokemon.type;
  types.forEach((type, index) => {
    const typeImage = document.createElement("img");
    const imageClass = `type-image-${index}`;
    typeImage.classList.add(imageClass);
    typeImage.src = `imagenes/Img-pokemonType/${type}.png`;
    li.appendChild(typeImage);
  });

  li.appendChild(pokemonRegion);
  pokemonRegion.setAttribute("itemprop", "name-region");
  pokemonRegion.innerHTML = `Región: ${pokemon.generation.name}`;
  const pokemonResistant = document.createElement("dd");
  li.appendChild(pokemonResistant);
  pokemonResistant.setAttribute("itemprop", "resistant");
  pokemonResistant.innerHTML = `Fortalezas: ${pokemon.resistant}`;
  const pokemonWeaknesses = document.createElement("dd");
  li.appendChild(pokemonWeaknesses);
  pokemonWeaknesses.setAttribute("itemprop", "weaknesses");
  pokemonWeaknesses.innerHTML = `Debilidades: ${pokemon.weaknesses}`;

  const evolutionImage1 = document.createElement("img");
  li.appendChild(evolutionImage1);
  evolutionImage1.setAttribute("itemprop", "img-evolution");
  const evolution1 = document.createElement("dd");
  li.appendChild(evolution1);
  evolution1.setAttribute("itemprop", "evolucion-1");
  const evolution2 = document.createElement("dd");
  li.appendChild(evolution2);
  evolution2.setAttribute("itemprop", "evolucion-2");

  const pokemonCandycost1 = document.createElement("dd");
  li.appendChild(pokemonCandycost1);
  pokemonCandycost1.setAttribute("itemprop", "candy-cost-1");

  const pokemonCandycost2 = document.createElement("dd");
  li.appendChild(pokemonCandycost2);
  pokemonCandycost2.setAttribute("itemprop", "candy-cost-2");

  if (
    pokemon.evolution &&
    Array.isArray(pokemon.evolution["next-evolution"]) &&
    pokemon.evolution["next-evolution"][0] &&
    pokemon.evolution["next-evolution"][0]["next-evolution"]
  ) {
    evolution1.innerHTML = `Evolución 1: ${pokemon.evolution["next-evolution"][0].name}`;
    evolution2.innerHTML = `Evolución 2: ${pokemon.evolution["next-evolution"][0]["next-evolution"][0].name}`;
    pokemonCandycost1.innerHTML = `x${pokemon.evolution["next-evolution"][0]["candy-cost"]}`;
    const candyImage1 = document.createElement("img");
    li.appendChild(candyImage1);
    candyImage1.setAttribute("class", "candy1");
    candyImage1.src = 'imagenes/candy.png'
  } else if (
    pokemon.evolution &&
    Array.isArray(pokemon.evolution["prev-evolution"]) &&
    pokemon.evolution["prev-evolution"][0] &&
    pokemon.evolution["next-evolution"] && ["prev-evolution"]
  ) {
    evolution1.innerHTML = `Preevolución: ${pokemon.evolution["prev-evolution"][0].name}`;
    evolution2.innerHTML = `Evolución: ${pokemon.evolution["next-evolution"][0].name}`;
    pokemonCandycost2.innerHTML = `x${pokemon.evolution["next-evolution"][0]["candy-cost"]}`;
    const candyImage2 = document.createElement("img");
    li.appendChild(candyImage2);
    candyImage2.setAttribute("class", "candy2");
    candyImage2.src = 'imagenes/candy.png'
  } else if (
    pokemon.evolution &&
    Array.isArray(pokemon.evolution["prev-evolution"]) &&
    pokemon.evolution["prev-evolution"][0] &&
    Array.isArray(pokemon.evolution["prev-evolution"][0]["prev-evolution"])
  ) {
    evolution1.innerHTML = `Preevolución 1: ${pokemon.evolution["prev-evolution"][0]["prev-evolution"][0].name}`;
    evolution2.innerHTML = `Preevolución 2: ${pokemon.evolution["prev-evolution"][0].name}`;
  }

  const pokemonSpawnChance = document.createElement("dd");
  li.appendChild(pokemonSpawnChance);
  pokemonSpawnChance.setAttribute("itemprop", "spawn-chance");
  pokemonSpawnChance.innerHTML = `Tasa de aparición: ${pokemon["spawn-chance"]}`;
};
