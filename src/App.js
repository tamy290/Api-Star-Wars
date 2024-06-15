import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Componentes/Home/Home';
import Person from './Componentes/Details/Person';

function App() {
  return (
    <Router>
    <div>
      <Route path='/' exact Component={Home} />
      <Route path='/:id' exact Component={Person} />
    </div>
    </Router>
  );
}

export default App;
