import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <nav className='Nav'>
          <ul className='NavList'>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
    </div>
    </Router>
  );
}

export default App;
