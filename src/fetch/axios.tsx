import axios from 'axios';
// axios is used for api fetching
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
export default instance;
