import axios from 'axios';

export default axios.create({
   baseURL:'https://developers.zomato.com/api/v2.1',
   headers:{
       'user-key':'f3ce3c27036399f0ffd1ec96c4cd6940',
  }
});