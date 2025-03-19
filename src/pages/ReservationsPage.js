import React, { useEffect, useState } from 'react';
import { getUserReservations, cancelReservation } from '../api';
import ReservationList from '../components/ReservationList';
import { motion } from 'framer-motion';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const data = await getUserReservations();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleCancel = async (id) => {
    try {
      await cancelReservation(id);
      fetchReservations(); // Actualizar la lista después de cancelar
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      {/* Título de la página */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-white mb-8"
      >
        Mis Reservas
      </motion.h1>

      {/* Lista de reservas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <ReservationList reservations={reservations} onCancel={handleCancel} />
      </motion.div>
    </div>
  );
};

export default ReservationsPage;