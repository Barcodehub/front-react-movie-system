import React, { useEffect, useState } from 'react';
import { getUserReservations, cancelReservation } from '../api';
import ReservationList from '../components/ReservationList';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const data = await getUserReservations();
    setReservations(data);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleCancel = async (id) => {
    await cancelReservation(id);
    fetchReservations();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-6">Mis Reservas</h1>
      <ReservationList reservations={reservations} onCancel={handleCancel} />
    </div>
  );
};

export default ReservationsPage;