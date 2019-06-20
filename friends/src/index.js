import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import reducer from "./reducers/reducer"
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
