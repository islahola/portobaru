import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages';
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom';
import Rute from './component/rute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Rute/>
    </BrowserRouter>
  </React.StrictMode>
);

