 import axios from 'axios';

 export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'c954fb5d1007bff9c2929e70c676181b',
   }
 });

