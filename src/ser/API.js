import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(options);


export const getPost = (id) => axiosInstance('/users/'+ id+'/posts')
export const getComment = (id) => axiosInstance('/posts/'+ id+'/comments')