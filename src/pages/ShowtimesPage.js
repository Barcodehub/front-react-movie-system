import React, { useEffect, useState } from 'react';
import { getShowtimes, deleteShowtime } from '../api';
import ShowtimeList from '../components/ShowtimeList';
import ShowtimeForm from '../components/ShowtimeForm';

const ShowtimesPage = () => {
  const [showtimes, setShowtimes] = useState([]);

  const fetchShowtimes = async () => {
    const data = await getShowtimes();
    setShowtimes(data);
  };

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const handleDelete = async (id) => {
    await deleteShowtime(id);
    fetchShowtimes();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-6">Gestión de Funciones</h1>
      <ShowtimeForm onSave={fetchShowtimes} />
      <ShowtimeList showtimes={showtimes} onDelete={handleDelete} />
    </div>
  );
};

export default ShowtimesPage;