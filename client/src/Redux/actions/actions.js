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

export function getProducto() {
  return function (dispatch) {
    axios.get('/get').then(res => {
      return dispatch({ type: 'GET_PRODUCTOS_ALL', payload: res.data })
    })
  }
}