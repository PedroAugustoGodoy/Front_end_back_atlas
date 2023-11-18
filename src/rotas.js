
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Tela from './Tela';

const Rotas = () => {
  return (

   <Router>
    <Routes>
    <Route path = "/" exact Component={App} />
    <Route path = "/Tela" Component={Tela} />
    </Routes>
   </Router>
    
  );
};

export default Rotas;
