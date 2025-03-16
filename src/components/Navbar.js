import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo o Nombre de la Aplicación */}
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">
            CineApp
          </Link>

          {/* Enlaces de Navegación */}
          <div className="flex space-x-4">
            <Link
              to="/movies"
              className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Películas
            </Link>
            <Link
              to="/showtimes"
              className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Funciones
            </Link>
            <Link
              to="/reservations"
              className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Reservas
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;