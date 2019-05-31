export const people = [
  {
    id: "1",
    name: 'yu hyelim',
    age: 10,
    gender: "female"
  },
  {
    id: "2",
    name: 'df',
    age: 11,
    gender: "female"
  },
  {
    id: "3",
    name: 'SDFGERG',
    age: 21,
    gender: "male"
  }
]


export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0]
}
