import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getMovies } from '../api';

const ShowtimeForm = ({ showtime, onSave }) => {
  const [formData, setFormData] = useState(
    showtime || {
      movie: '',
      startTime: '',
      endTime: '',
      totalSeats: 0,
      availableSeats: 0,
    }
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">{showtime ? 'Editar Función' : 'Crear Función'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Película</label>
        <select
          value={formData.movie}
          onChange={(e) => setFormData({ ...formData, movie: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecciona una película</option>
          {movies.map(movie => (
            <option key={movie._id} value={movie._id}>
              {movie.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha y Hora de Inicio</label>
        <input
          type="datetime-local"
          value={formData.startTime}
          onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha y Hora de Fin</label>
        <input
          type="datetime-local"
          value={formData.endTime}
          onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Total de Asientos</label>
        <input
          type="number"
          value={formData.totalSeats}
          onChange={(e) => setFormData({ ...formData, totalSeats: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Asientos Disponibles</label>
        <input
          type="number"
          value={formData.availableSeats}
          onChange={(e) => setFormData({ ...formData, availableSeats: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Guardar
      </button>
    </motion.form>
  );
};

export default ShowtimeForm;