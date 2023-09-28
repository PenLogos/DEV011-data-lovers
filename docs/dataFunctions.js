export const dataFilter = (data, filterBy, value) => {
  const filter = data.filter((element) => {
    return element[filterBy].includes(value);
  });
  return filter;
};

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((pokemon1, pokemon2) => {
    if (sortOrder) {
      return pokemon2[sortBy].localeCompare(pokemon1[sortBy]);
    } else {
      return pokemon1[sortBy].localeCompare(pokemon2[sortBy]);
    }
  });
};