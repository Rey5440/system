import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter como Router
import './App.css';
import Home from './components/home/home';
import Spin from './components/spin/spin';

function App() {
  return (
    <Router>
      <div>
        <h1>esto es app</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/primer_spin' element={<Spin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
