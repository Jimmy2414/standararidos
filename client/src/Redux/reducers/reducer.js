const initialState = {
  Productos: [],
  nombreProducto: [],
  detalleProducto: [],
  URL: '',
};

export const reducerroot = (state = initialState, { type, payload }) => {
  switch (type) {
    // case 'GET_TYPES':
    //   return {
    //     ...state,
    //     Productos: payload,
    //   };

    case 'GET_PRODUCTOS_ALL':
      return {
        ...state,
        Productos: payload,
      };
    case 'POST_URL':
      return {
        ...state,
        URL: payload,
      };
    // CASE DEFAULT
    default:
      return state;

    //BUSCAR
    case 'SEARCH_SEARCH':
      const nombre = state.Productos
      return {
        ...state,
        nombreProducto: nombre,
        Productos: payload
      };

    case 'DETALLE_PRODUCTO':
      return {
        ...state,
        detalleProducto: payload
      }

  }
};
