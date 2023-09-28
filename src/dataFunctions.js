// estas funciones son de ejemplo

export const dataFilter = (data, filterBy, value) => {
  const filter = data.filter((element) => {
    return element[filterBy].includes(value);
  });
  return filter;
};

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((pokemon1, pokemon2) => {
    if (sortOrder === "asc"){
      if ( pokemon1[sortBy] < pokemon2[sortBy]) {
        return -1
      }
      if ( pokemon1[sortBy] > pokemon2[sortBy]) {
        return 1
      }
    } else if (sortOrder === "desc"){
      if ( pokemon1[sortBy] < pokemon2[sortBy]) {
        return 1
      }
      if ( pokemon1[sortBy] > pokemon2[sortBy]) {
        return -1
      }
    }
  }) 
};

