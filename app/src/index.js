import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import { mainReducer } from './Reducers/reducers';

export const store = createStore(mainReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);