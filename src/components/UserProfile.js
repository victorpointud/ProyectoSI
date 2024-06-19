import React from 'react';
import { auth } from '../services/firebase';

const UserProfile = () => {
  const user = auth.currentUser;

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
