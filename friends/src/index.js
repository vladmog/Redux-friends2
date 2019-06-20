import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore, compose} from 'redux';
import reducer from "./reducers/reducer"
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import {BrowserRouter as Router} from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Router>
        <Provider store = {store}>
            <App />
        </Provider>
    </Router>
, document.getElementById('root'));
