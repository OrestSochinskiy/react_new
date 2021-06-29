import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(options);


const getUsers = () => axiosInstance('/posts');
const getUser =(id) => axiosInstance('/posts/' + id)

export {getUsers,getUser};
