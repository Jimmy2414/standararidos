// import { createStore, applyMiddleware, compose } from 'redux';
// import { reducerroot } from '../reducers/reducer';
// import thunk from 'redux-thunk';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducerroot, composeEnhancer(applyMiddleware(thunk)));

// export default store;
import { reducerroot } from '../reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: reducerroot,
});

export default store;
