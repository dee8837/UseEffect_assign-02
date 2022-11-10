import axios from 'axios'


const ombd = axios.create({
    baseURL:"https://www.omdbapi.com/",
    timeout: 10000,
    params: {
        apikey: "bc9cf915"
    }
});

export  {ombd};