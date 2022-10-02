import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/api/',
});

export default api;
