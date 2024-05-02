import axios from 'axios';
import { store } from '../store/Configuration/store';

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
});

api.interceptors.request.use(async config => {
  const auth = store.getState().auth;
  config.headers.Authorization = `Bearer ${auth.accessToken}`;
  return config;
});

export default api;
