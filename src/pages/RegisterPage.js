import React, { useState } from 'react';
import { register } from '../api';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await register(formData);
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Registrarse</h2>
        <div className="space-y-6">
          {/* Campo Nombre de Usuario */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nombre de Usuario</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>

          {/* Campo Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ingresa tu email"
              required
            />
          </div>

          {/* Campo Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {/* Botón de Registrarse */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Registrarse
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default RegisterPage;