import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './store/mainReducer';

const store = createStore(mainReducer)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
,  document.getElementById('root'));
