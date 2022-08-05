const initialState = {
  Productos: [],
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
  }
};
