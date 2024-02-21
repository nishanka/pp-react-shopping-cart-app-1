import React from 'react';
import LoginButton from './LoginButton';

const Login = () => {
  return (
    <div className='bg-dark rounded p-4 text-white text-center'>
      <h4>Please login to continue...</h4>
      <LoginButton />
    </div>
  );
};

export default Login;
