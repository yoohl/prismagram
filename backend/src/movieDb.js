import fetch from "node-fetch"
const API_URL = "https://yts.am/api/v2/list_movies.json";

// let movies = [
//   {
//     id: 0,
//     name: '기생충',
//     score: 3,
//   },
//   {
//     id: 1,
//     name: 'Avengers - The new one',
//     score: 8,
//   },
//   {
//     id: 2,
//     name: '알라딘',
//     score: 4,
//   }
// ]
// export const getMovies = () => movies;

export const getMovies = (limit, rating) => {
  return fetch(`${API_URL}`)
  .then(res => res.json())
  .then(json => json.data.movies);
}
