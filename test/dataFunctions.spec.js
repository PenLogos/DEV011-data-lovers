import { dataFilter } from "../src/dataFunctions.js";
import { sortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { dataGrass } from "./data.js";
import { sortedPokemonAsc } from "./data.js";
import { sortedPokemonDesc } from "./data.js";

const desc = "desc"

describe("dataFilter", () => {
  it('debería retornar bulbasaur, ivysaur y venasaur para la selección "grass"', () => {
    const dataFiltered = dataFilter(fakeData['pokemon'], "type", "grass");
    expect(dataFiltered).toStrictEqual(dataGrass['pokemon'])
  });
});

describe("dataFilter", () => {
  it('debería retornar un array vacío', () => {
    const dataFiltered = dataFilter(fakeData['pokemon'], "type", "aklsdjalsd");
    expect(dataFiltered).toStrictEqual([])
  });
});

describe("sortData", () => {
  it('debería ordenar la data de manera ascendente', () => {
    const sortedData = sortData(fakeData['pokemon'], "name");
    expect(sortedData).toStrictEqual(sortedPokemonAsc['pokemon'])
  });
});

describe("sortData", () => {
  it('debería ordenar la data de manera descendente', () => {
    const sortedData = sortData(fakeData['pokemon'], "name", desc);
    expect(sortedData).toStrictEqual(sortedPokemonDesc['pokemon'])
  });
});