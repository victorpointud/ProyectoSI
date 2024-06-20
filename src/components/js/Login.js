// src/components/Login.js
import React, { useState } from 'react';
import firebase from '../../firebase';

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (provider) => {
    setLoading(true);
    setError(null);
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={() => handleLogin(new firebase.auth.GoogleAuthProvider())}>
        Login with Google
      </button>
      <button onClick={() => handleLogin(new firebase.auth.FacebookAuthProvider())}>
        Login with Facebook
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Login;
