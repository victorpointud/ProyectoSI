import React, { useState } from 'react';
import { auth } from '../services/firebase';

const EditProfile = () => {
  const [displayName, setDisplayName] = useState(auth.currentUser.displayName);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await auth.currentUser.updateProfile({ displayName });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="text" placeholder="Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
        <button type="submit" disabled={loading}>Update</button>
      </form>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default EditProfile;
