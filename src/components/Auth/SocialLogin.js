import React from 'react';
import { auth, googleProvider, facebookProvider } from '../services/firebase';
import { useHistory } from 'react-router-dom';

const SocialLogin = () => {
  const history = useHistory();

  const handleSocialLogin = async (provider) => {
    try {
      await auth.signInWithPopup(provider);
      history.push('/home');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button onClick={() => handleSocialLogin(googleProvider)}>Login with Google</button>
      <button onClick={() => handleSocialLogin(facebookProvider)}>Login with Facebook</button>
    </div>
  );
};

export default SocialLogin;
