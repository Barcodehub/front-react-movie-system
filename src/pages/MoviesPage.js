import React from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

const MoviesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Gestión de Películas</h1>
      <MovieForm />
      <MovieList />
    </div>
  );
};

export default MoviesPage;