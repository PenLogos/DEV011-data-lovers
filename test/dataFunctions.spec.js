import { dataFilter } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
import { dataGrass } from "./data.js";

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