import axios from 'axios'
import { SnackData } from '../interfaces/SnackData';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

})

// https://seusite.com.br/api/burguers
// https://seusite.com.br/api/pizzas
// https://seusite.com.br/api/bebidas]

export const getBurguers = () => api.get<SnackData []>('/burgers');
export const getPizzas = () => api.get('/pizzas');
export const getBebidas = () => api.get('/drinks')
export const getSorvetes = () => api.get('/ice-creams')

export default api
