// estas funciones son de ejemplo

export const dataFilter = (data, filterBy, value) => {
  const filter = data.filter((element)=>{
    return element[filterBy].includes(value)
  })
  return filter;
};

// export const anotherExample = (data, filterBy, value) => {
//   //const optionPokemonTypeSelected = data.filter(type => type === type.grass); 
//   const filter = data.filter((element)=>{
//     return element[filterBy] == value
//   })
//   return filter;
// };