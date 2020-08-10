import axios from 'axios';

export default axios.create({
  baseURL: 'https://my-json-server.typicode.com/tereshka/qrcg-profile/',
  headers: {
    'Content-type': 'application/json',
  },
});