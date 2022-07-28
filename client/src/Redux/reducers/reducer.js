const initialState = {
  Productos: [],
};

export const reducerroot = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_TYPES':
      return {
        ...state,
        Productos: payload,
      };
    default:
      return state;
  }
};
