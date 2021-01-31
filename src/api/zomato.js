 import axios from 'axios';

 export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'70603f3ae4dd3141c5a0afb0dd61ad32',
   }
 });

// //yelp.get('/search');