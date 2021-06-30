import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(options);


const getPost =(id) => axiosInstance('/users/'+ id +'/posts' )
const getName =(id) => axiosInstance('/posts/'+ id + "/comments")

export {getPost,getName};