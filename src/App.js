// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import './components/Home.css';
import './components/Login.css';
import './components/UserProfile.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
