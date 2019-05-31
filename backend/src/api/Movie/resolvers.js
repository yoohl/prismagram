import { getMovies, getById, addMovie, deleteMovie } from "../../movieDb"

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => {
      return getById(id) // 화살표 함수에서 중괄호를 제거 하면 암묵적으로 return 됨, 'person: (_, { id }) => getById(id) 와 같음'
    }
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, {id}) => deleteMovie(id)
  }
};
export default resolvers;

