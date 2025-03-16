import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { getShowtimes } from '../api'; 


const ShowtimeList = () => {
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        // const response = await axios.get('/api/showtimes');
        // setShowtimes(response.data);
      const data = await getShowtimes(); // Usamos la función del API
      setShowtimes(data);
      } catch (error) {
        console.error('Error fetching showtimes:', error);
      }
    };

    fetchShowtimes();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <h1 className="text-2xl font-bold mb-4">Funciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showtimes.map(showtime => (
          <motion.div
            key={showtime._id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold">{showtime.movie.title}</h2>
            <p className="text-gray-600">{new Date(showtime.startTime).toLocaleString()}</p>
            <p className="text-gray-600">Asientos disponibles: {showtime.availableSeats}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShowtimeList;