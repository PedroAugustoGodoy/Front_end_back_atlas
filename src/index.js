import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './rotas'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <Rotas />
    </React.StrictMode>
 
  // document.getElementById('root')
);

