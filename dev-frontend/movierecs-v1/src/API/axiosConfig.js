import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080', // Local backend URL
    headers: {
        "ngrok-skip-browser-warning": "true" // Optional: not needed for local setup
    }
})