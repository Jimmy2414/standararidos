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
      return dispatch({ type: 'GET_PRODUCTOS_ALL', payload: res.data });
    });
  };
}

export function detalleProducto(id) {
  return function (dispatch) {
    axios.get(`/producto/${id}`).then(res => {
      return dispatch({ type: 'DETALLE_PRODUCTO', payload: res.data })
    })
  }
}


export function getUrl(url) {
  return { type: 'POST_URL', payload: url };
}




// UPDATE

// buscador

export function filterProductoPorNombre(nombre) {
  return async (dispatch) => {
    let { data } = await axios.get(`/?name=${nombre}`);
    return dispatch({ type: 'SEARCH_SEARCH', payload: data });
  };
}