// estas funciones son de ejemplo

export const typeFilter = (data, filterBy, value) => {
  //const optionPokemonTypeSelected = data.filter(type => type === type.grass); 
  const filter = data.filter((element)=>{
    return element[filterBy].includes(value)
  })
  return filter;
  // console.log("Hola");

};

export const anotherExample = (data, filterBy, value) => {
  //const optionPokemonTypeSelected = data.filter(type => type === type.grass); 
  const filter = data.filter((element)=>{
    return element[filterBy] == value
  })
  return filter;
};