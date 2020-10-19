import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happydeploy.herokuapp.com'
});

export default api;
