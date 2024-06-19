import React from 'react';
import LoginForm from '../src/components/LoginForm';
import SocialLogin from '../src/components/SocialLogin';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <SocialLogin />
    </div>
  );
};

export default Login;
