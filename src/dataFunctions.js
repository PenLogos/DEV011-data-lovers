// estas funciones son de ejemplo

export const dataPokemonFilter = (data, filterBy, value) => {
  //const optionPokemonTypeSelected = data.filter(type => type === type.grass); 
  const filter = data.filter((element)=>{
    return element[filterBy].includes(value)
  })
  return filter;
};

export const nameFilter = (data, filterBy, value) => {
  //const optionPokemonTypeSelected = data.filter(type => type === type.grass); 
  const filter = data.filter((element)=>{
    return element[filterBy] == value
  })
  return filter;
};