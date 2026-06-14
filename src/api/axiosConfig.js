import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // Points to your Spring Boot local server
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // MANDATORY for Spring Boot to receive/send HttpOnly cookies
});

export default API;