import './Styles/Fonts.css';
import './Styles/Colors.css';

import './Styles/Light.css';
import './Styles/Main.css';
import './functions.js';

import React from 'react';
import ReactDOM from 'react-dom';
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
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);