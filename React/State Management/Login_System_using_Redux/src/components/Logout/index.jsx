import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Logout = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>
        Welcome <span>{user.name}</span>
      </h1>
      <button>Logout</button>
    </div>
  );
};

export default Logout;
