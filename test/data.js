// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data = {
  pokemon: [
    {
      name: "bulbasaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.69",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "003",
                name: "venusaur",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "ivysaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.042",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "003",
            name: "venusaur",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "001",
            name: "bulbasaur",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "venusaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.017",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "prev-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "100",
            "prev-evolution": [
              {
                num: "001",
                name: "bulbasaur",
                "candy-cost": "25",
              },
            ],
          },
        ],
      },
    },
    {
      name: "charmander",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/004.png",
      type: ["fire"],
      "spawn-chance": "0.253",
      resistant: ["fire", "grass", "ice", "bug", "steel"],
      weaknesses: ["water", "ground", "rock"],
      evolution: {
        candy: "charmander candy",
        "next-evolution": [
          {
            num: "005",
            name: "charmeleon",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "006",
                name: "charizard",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "charmeleon",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/005.png",
      type: ["fire"],
      "spawn-chance": "0.012",
      stats: {
        "base-attack": "158",
        "base-defense": "126",
        "base-stamina": "151",
        "max-cp": "1653",
        "max-hp": "131",
      },
      resistant: ["fire", "grass", "ice", "bug", "steel"],
      weaknesses: ["water", "ground", "rock"],
      evolution: {
        candy: "charmander candy",
        "next-evolution": [
          {
            num: "006",
            name: "charizard",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "004",
            name: "charmander",
            "candy-cost": "25",
          },
        ],
      },
    },
  ],
};

export const dataGrass = {
  pokemon: [
    {
      name: "bulbasaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.69",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "003",
                name: "venusaur",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "ivysaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.042",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "003",
            name: "venusaur",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "001",
            name: "bulbasaur",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "venusaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.017",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "prev-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "100",
            "prev-evolution": [
              {
                num: "001",
                name: "bulbasaur",
                "candy-cost": "25",
              },
            ],
          },
        ],
      },
    },
  ],
};

export const sortedPokemonAsc = {
  pokemon: [
    {
      name: "bulbasaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.69",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "003",
                name: "venusaur",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "charmander",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/004.png",
      type: ["fire"],
      "spawn-chance": "0.253",
      resistant: ["fire", "grass", "ice", "bug", "steel"],
      weaknesses: ["water", "ground", "rock"],
      evolution: {
        candy: "charmander candy",
        "next-evolution": [
          {
            num: "005",
            name: "charmeleon",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "006",
                name: "charizard",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "charmeleon",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/005.png",
      type: ["fire"],
      "spawn-chance": "0.012",
      stats: {
        "base-attack": "158",
        "base-defense": "126",
        "base-stamina": "151",
        "max-cp": "1653",
        "max-hp": "131",
      },
      resistant: ["fire", "grass", "ice", "bug", "steel"],
      weaknesses: ["water", "ground", "rock"],
      evolution: {
        candy: "charmander candy",
        "next-evolution": [
          {
            num: "006",
            name: "charizard",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "004",
            name: "charmander",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "ivysaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.042",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "003",
            name: "venusaur",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "001",
            name: "bulbasaur",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "venusaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.017",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "prev-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "100",
            "prev-evolution": [
              {
                num: "001",
                name: "bulbasaur",
                "candy-cost": "25",
              },
            ],
          },
        ],
      },
    },
  ],
};

export const sortedPokemonDesc = {
  pokemon: [
    {
      name: "venusaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.017",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "prev-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "100",
            "prev-evolution": [
              {
                num: "001",
                name: "bulbasaur",
                "candy-cost": "25",
              },
            ],
          },
        ],
      },
    },
    {
      name: "ivysaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.042",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "003",
            name: "venusaur",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "001",
            name: "bulbasaur",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "charmeleon",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/005.png",
      type: ["fire"],
      "spawn-chance": "0.012",
      stats: {
        "base-attack": "158",
        "base-defense": "126",
        "base-stamina": "151",
        "max-cp": "1653",
        "max-hp": "131",
      },
      resistant: ["fire", "grass", "ice", "bug", "steel"],
      weaknesses: ["water", "ground", "rock"],
      evolution: {
        candy: "charmander candy",
        "next-evolution": [
          {
            num: "006",
            name: "charizard",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "004",
            name: "charmander",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "charmander",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/004.png",
      type: ["fire"],
      "spawn-chance": "0.253",
      resistant: ["fire", "grass", "ice", "bug", "steel"],
      weaknesses: ["water", "ground", "rock"],
      evolution: {
        candy: "charmander candy",
        "next-evolution": [
          {
            num: "005",
            name: "charmeleon",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "006",
                name: "charizard",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "bulbasaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.69",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "003",
                name: "venusaur",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
  ],
};
