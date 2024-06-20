// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {user ? (
        <div className="profile-details">
          <p><strong>Nombre:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user is logged in</p>
      )}
    </div>
  );
}

export default UserProfile;
