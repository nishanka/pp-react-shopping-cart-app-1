import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  console.log(user);

  return (
    isAuthenticated && (
      <div className='profile bg-dark rounded p-4 text-white text-center'>
        <img src={user.picture} alt={user.name} />
        <h4>
          <span className='text-primary'>{user.name}</span>
        </h4>
        <p className='mb-0'>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
