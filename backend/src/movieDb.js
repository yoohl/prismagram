let movies = [
  {
    id: 0,
    name: '기생충',
    score: 3,
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8,
  },
  {
    id: 2,
    name: '알라딘',
    score: 4,
  }
]

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0]
}

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: parseInt(`${movies.length + 1}`),
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}
