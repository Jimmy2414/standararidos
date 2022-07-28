const initialState = {
  Productos: [],
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
        Productos: payload
      }

    // CASE DEFAULT      
    default:
      return state;
  }
};
