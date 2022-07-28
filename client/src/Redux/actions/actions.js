import axios from 'axios';
export function postProducto(payload) {
  return async function () {
    try {
      const response = await axios.post('/post', payload);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}
