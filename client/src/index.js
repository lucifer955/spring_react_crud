import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>

,
  document.getElementById('root')
);

