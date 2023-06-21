import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const auth = false;

  return auth ? <Outlet /> : <Navigate to='/login' replace />;
};

export default ProtectedRoutes;
