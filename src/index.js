import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages';
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Index/>
  </React.StrictMode>
);

