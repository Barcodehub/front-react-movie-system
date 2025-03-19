import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const MovieForm = ({ movie, onSave }) => {
  const [formData, setFormData] = useState(movie || { title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (movie) {
        await axios.put(`/api/movies/${movie._id}`, formData);
      } else {
        await axios.post('/api/movies', formData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving movie:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-4"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">
          {movie ? 'Editar Película' : 'Crear Película'}
        </h2>
        <div className="space-y-6">
          {/* Campo Título */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Título de la película"
            />
          </div>

          {/* Campo Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Descripción de la película"
            />
          </div>

          {/* Botón Guardar */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Guardar
            </button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default MovieForm;