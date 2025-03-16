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
    <form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">{movie ? 'Editar Película' : 'Crear Película'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Título</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </form>
  );
};

export default MovieForm;