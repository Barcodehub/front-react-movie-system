import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createReservation } from '../api';
import { motion } from 'framer-motion';

const CreateReservationPage = () => {
  const { showtimeId } = useParams(); // Obtener el ID de la función desde la URL
  const navigate = useNavigate();
  const [seats, setSeats] = useState(1);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationData = { showtime: showtimeId, seats };
      await createReservation(reservationData);
      navigate('/reservations'); // Redirigir a la página de reservas después de crear
    } catch (error) {
      setError('Error al crear la reserva. Por favor, intenta de nuevo.');
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Crear Reserva</h2>

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Campo Número de Asientos */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Número de Asientos
          </label>
          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="1"
            required
          />
        </div>

        {/* Botón de Reservar */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          Reservar
        </button>
      </motion.form>
    </div>
  );
};

export default CreateReservationPage;