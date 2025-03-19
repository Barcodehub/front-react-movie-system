import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getMovies } from '../api'; // Asegúrate de importar correctamente tu función getMovies

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4"
    >
      <h1 className="text-3xl font-bold mb-6 text-white">Películas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map(movie => (
          <motion.div
            key={movie._id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 bg-opacity-75 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700"
          >
            <h2 className="text-xl font-semibold text-blue-400">{movie.title}</h2>
            <p className="text-gray-300 mt-2">{movie.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MovieList;