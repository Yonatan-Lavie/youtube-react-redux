import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const initState = {
    siteName: 'Youtube React Redux',
}

const reduser = (state = initState, action) =>{
    switch (action.type) {
        case "CHANGE_SITE_NAME":
            state = {...state, siteName: action.payload}
            break;
    
        default:
            break;
    }
    return state;
}
const store = createStore(reduser)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
,  document.getElementById('root'));
