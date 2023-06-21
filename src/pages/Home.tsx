import React from 'react';
import { NavLink } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <>
      <NavLink to='/login'>login</NavLink>
      <NavLink to='/signup'>signUp</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
    </>
  );
};

export default Home;
