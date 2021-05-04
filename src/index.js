import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'


ReactDOM.render(<App />,  document.getElementById('root'));
