import React from 'react';
import { motion } from 'framer-motion';

const ReservationList = ({ reservations, onCancel }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <h1 className="text-2xl font-bold mb-4">Mis Reservas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reservations.map(reservation => (
          <motion.div
            key={reservation._id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold">{reservation.showtime.movie.title}</h2>
            <p className="text-gray-600">
              Fecha: {new Date(reservation.showtime.startTime).toLocaleString()}
            </p>
            <p className="text-gray-600">Asientos: {reservation.seats}</p>
            <button
              onClick={() => onCancel(reservation._id)}
              className="mt-2 bg-red-500 text-white p-2 rounded"
            >
              Cancelar Reserva
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ReservationList;