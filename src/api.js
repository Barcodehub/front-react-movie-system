import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Cambia la URL según tu backend

// Películas
export const getMovies = async () => {
  const response = await axios.get(`${API_URL}/movies`);
  return response.data;
};

export const createMovie = async (movieData) => {
  const response = await axios.post(`${API_URL}/movies`, movieData);
  return response.data;
};

export const updateMovie = async (id, movieData) => {
  const response = await axios.put(`${API_URL}/movies/${id}`, movieData);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await axios.delete(`${API_URL}/movies/${id}`);
  return response.data;
};

// Funciones (Showtimes)
export const getShowtimes = async () => {
  const response = await axios.get(`${API_URL}/showtimes`);
  return response.data;
};

export const createShowtime = async (showtimeData) => {
  const response = await axios.post(`${API_URL}/showtimes`, showtimeData);
  return response.data;
};

export const updateShowtime = async (id, showtimeData) => {
  const response = await axios.put(`${API_URL}/showtimes/${id}`, showtimeData);
  return response.data;
};

export const deleteShowtime = async (id) => {
  const response = await axios.delete(`${API_URL}/showtimes/${id}`);
  return response.data;
};

// Reservas
export const createReservation = async (reservationData) => {
  const response = await axios.post(`${API_URL}/reservations`, reservationData);
  return response.data;
};

export const getUserReservations = async () => {
  const response = await axios.get(`${API_URL}/reservations/user`);
  return response.data;
};

export const cancelReservation = async (id) => {
  const response = await axios.delete(`${API_URL}/reservations/${id}`);
  return response.data;
};

// Autenticación
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};