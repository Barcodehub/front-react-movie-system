import React from 'react';
import { motion } from 'framer-motion';

const ReservationList = ({ reservations, onCancel }) => {
  return (
    <div className="space-y-6">
      {reservations.map((reservation) => (
        <motion.div
          key={reservation._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 bg-opacity-75 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-700"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-blue-400">
                {reservation.showtime.movieTitle}
              </h2>
              <p className="text-gray-300">
                Fecha: {new Date(reservation.showtime.date).toLocaleDateString()}
              </p>
              <p className="text-gray-300">Hora: {reservation.showtime.time}</p>
              <p className="text-gray-300">Asientos: {reservation.seats}</p>
            </div>
            <button
              onClick={() => onCancel(reservation._id)}
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              Cancelar
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReservationList;