const initialState = {
  Productos: [],
  nombreProducto: [],
  detalleProducto: [],
  URL: '',
  ProductoBefore: [],
  productoFiltro: []
};

export const reducerroot = (state = initialState, { type, payload }) => {
  switch (type) {
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
      const nombre = state.Productos;
      return {
        ...state,
        nombreProducto: nombre,
        Productos: payload,
      };

    case 'DETALLE_PRODUCTO':
      return {
        ...state,
        detalleProducto: payload,
      };

    case 'DELETE_PRODUCTO':
      return {
        ...state,
      };
    case 'MODIFICAR_PRODUCTO':
      return {
        ...state,
      };
    case 'Detalle_Before':
      return {
        ...state,
        ProductoBefore: payload,
      };


  }
};
