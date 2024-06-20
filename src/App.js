// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/js/Login';
import Home from './components/js/Home';
import UserProfile from './components/js/UserProfile';
import './components/styles/Home.css';
import './components/styles/Login.css';
import './components/styles/UserProfile.css';

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
