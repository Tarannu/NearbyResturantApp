import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restaurant-app-users-default-rtdb.firebaseio.com/'
})

export default instance;