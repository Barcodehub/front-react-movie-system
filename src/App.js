import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import ShowtimesPage from './pages/ShowtimesPage';
import ReservationsPage from './pages/ReservationsPage';
import CreateReservationPage from './pages/CreateReservationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Usa el Navbar aquí */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/showtimes" element={<ShowtimesPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/reservations/create" element={<CreateReservationPage />} />
          <Route path="/reservations/create/:showtimeId" element={<CreateReservationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;