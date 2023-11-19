import axios from 'axios';

export default axios.create({
    baseURL: 'https://movie-list-service-production.up.railway.app/'
    // baseURL: 'http://localhost:8080'
});