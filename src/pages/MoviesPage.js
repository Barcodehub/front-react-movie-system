import React from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

const MoviesPage = () => {
  return (
    <div>
      
      <MovieForm />
      <MovieList />
    </div>
  );
};

export default MoviesPage;