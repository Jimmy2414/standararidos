import { async } from '@firebase/util';
import axios from 'axios';

export function postProducto(payload) {
  console.log(payload);
  return async function () {
    try {
      const response = await axios.post('http://localhost:3001/post', payload);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}

export function postFichaTecnica(payload) {
  console.log(payload);
  return async function () {
    try {
      const response = await axios.post('http://localhost:3001/post/ficha', payload);
      console.log(response)
      return response;
    } catch (e) {
      console.log(e);
    }
  };

}

export function getProducto() {
  return function (dispatch) {
    axios.get('http://localhost:3001/get').then(res => {
      return dispatch({ type: 'GET_PRODUCTOS_ALL', payload: res.data });
    });
  };
}

export function getFichaTecnica() {
  return function (dispatch) {
    axios.get('http://localhost:3001/get/fichas').then(res => {
      return dispatch({ type: 'GET_FICHA_TECNICA', payload: res.data });
    })
  }
}

export function detalleProducto(id) {
  return async dispatch => {
    try {
      let { data } = await axios.get(`http://localhost:3001/get/search?id=${id}`);
      return dispatch({ type: 'DETALLE_PRODUCTO', payload: data });
    } catch (err) {
      alert('error de detalle before');
    }
  };
}
export function productoBefore(productId) {
  return async dispatch => {
    try {
      let { data } = await axios.get(`http://localhost:3001/get/search?id=${productId}`);
      return dispatch({ type: 'Detalle_Before', payload: data });
    } catch (err) {
      alert('error de detalle before');
    }
  };
}
export function getUrl(url) {
  return { type: 'POST_URL', payload: url };
}

// UPDATE

// buscador

export function filterProductoPorNombre(nombre) {
  return async dispatch => {
    let { data } = await axios.get(`http://localhost:3001/get/search/${nombre}`);
    return dispatch({ type: 'SEARCH_SEARCH', payload: data });
  };
}

//modificar

export function modificarProducto(id, input) {
  console.log(id);
  return async dispatch => {
    try {
      let { data } = await axios.put(`http://localhost:3001/put/${id}`, {
        nombre: input.nombre,
        descripcion: input.descripcion,
        categoria: input.categoria,
      });
      return dispatch({ type: 'MODIFICAR_PRODUCTO', payload: data });
    } catch (err) {
      alert('Hecho');
    }
  };
}

//DELETE

export function deleteProducto(id) {
  return async dispatch => {
    await axios.delete(`http://localhost:3001/del/${id}`);
    return dispatch({ type: 'DELETE_PRODUCTO' });
  };
}

export function deleteFichaTecnica(id) {
  return async dispatch => {
    await axios.delete(`http://localhost:3001/del/ficha/${id}`);
    return dispatch({ type: 'DELETE_FICHA_TECNICA' });
  }
}

export function deleteState() {
  return async dispatch => {
    return dispatch({ type: 'DELETE_STATE' });
  };
}
