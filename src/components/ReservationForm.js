import React, { useState } from 'react';
import { createReservation } from '../api';
import { motion } from 'framer-motion';

const CreateReservationForm = ({ showtimeId, onReservationCreated }) => {
  const [seats, setSeats] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationData = { showtime: showtimeId, seats };
      await createReservation(reservationData);
      onReservationCreated(); // Actualizar la lista de reservas
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Reservar Asientos</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Número de Asientos</label>
          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          Reservar
        </button>
      </div>
    </motion.form>
  );
};

export default CreateReservationForm;