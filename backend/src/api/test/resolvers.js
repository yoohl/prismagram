const people = [
  {
    id: '1',
    name: 'yu hyelim',
    age: 10,
    gender: "female"
  },
  {
    id: '2',
    name: 'df',
    age: 11,
    gender: "female"
  },
  {
    id: '3',
    name: 'SDFGERG',
    age: 21,
    gender: "male"
  }
]

// export const getById = id => {
  
// }

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      console.log(args);
      //getById(id)
      const filterdPeople = people.filter(person => person.id === String(id));
      return filterdPeople[0]

    }
  }
};
export default resolvers;

