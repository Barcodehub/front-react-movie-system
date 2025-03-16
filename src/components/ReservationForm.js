import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { createReservation } from '../api'; 



const ReservationForm = ({ showtimeId, onSave }) => {
  const [seats, setSeats] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReservation({ showtime: showtimeId, seats }); // Usa la función de api.js
      onSave();
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">Reservar Asientos</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Número de Asientos</label>
        <input
          type="number"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="w-full p-2 border rounded"
          min="1"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Reservar
      </button>
    </motion.form>
  );
};

export default ReservationForm;