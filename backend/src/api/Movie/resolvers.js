import { people, getById } from "../../movieDb"


const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      return getById(id) // 화살표 함수에서 중괄호를 제거 하면 암묵적으로 return 됨, 'person: (_, { id }) => getById(id) 와 같음'
    }
  }
};
export default resolvers;

