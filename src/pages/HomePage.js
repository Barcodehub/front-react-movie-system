import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white">
      {/* Encabezado */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Bienvenido al Sistema de Cine</h1>
        <p className="text-xl text-gray-300 animate-fade-in-delay">
          Explora nuestras películas, funciones y reserva tus entradas fácilmente.
        </p>
      </header>

      {/* Tarjetas de Acción */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {/* Tarjeta 1: Películas */}
        <Link
          to="/movies"
          className="bg-gray-800 bg-opacity-75 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Películas</h2>
          <p className="text-gray-300">
            Descubre nuestra cartelera y encuentra las mejores películas.
          </p>
        </Link>

        {/* Tarjeta 2: Funciones */}
        <Link
          to="/showtimes"
          className="bg-gray-800 bg-opacity-75 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">Funciones</h2>
          <p className="text-gray-300">
            Consulta los horarios y reserva tu lugar en las próximas funciones.
          </p>
        </Link>

        {/* Tarjeta 3: Reservas */}
        <Link
          to="/reservations"
          className="bg-gray-800 bg-opacity-75 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Reservas</h2>
          <p className="text-gray-300">
            Gestiona tus reservas y disfruta de una experiencia sin complicaciones.
          </p>
        </Link>
      </div>

      {/* Botón de Acción */}
      <div className="mt-12 animate-bounce">
        <Link
          to="/movies"
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Comenzar
        </Link>
      </div>
    </div>
  );
};

export default HomePage;