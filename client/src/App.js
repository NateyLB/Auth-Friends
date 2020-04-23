import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home.js';
import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';
import Friends from './components/Friends.js';
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

        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path="/protected" component={Friends}/>
    </div>
    </Router>
  );
}

export default App;
