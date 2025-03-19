import React, { useEffect, useState } from 'react';
import { getShowtimes, deleteShowtime } from '../api';
import ShowtimeList from '../components/ShowtimeList';
import ShowtimeForm from '../components/ShowtimeForm';

const ShowtimesPage = () => {
  const [showtimes, setShowtimes] = useState([]);

  const fetchShowtimes = async () => {
    try {
      const data = await getShowtimes();
      setShowtimes(data);
    } catch (error) {
      console.error('Error fetching showtimes:', error);
    }
  };

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteShowtime(id);
      fetchShowtimes();
    } catch (error) {
      console.error('Error deleting showtime:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      {/* Título de la página */}
      <h1 className="text-4xl font-bold text-center text-white mb-8 animate-fade-in">
        Gestión de Funciones
      </h1>

      {/* Formulario para agregar/editar funciones */}
      <div className="max-w-4xl mx-auto mb-12">
        <ShowtimeForm onSave={fetchShowtimes} />
      </div>

      {/* Lista de funciones */}
      <div className="max-w-6xl mx-auto">
        <ShowtimeList showtimes={showtimes} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default ShowtimesPage;