import React from 'react';
import './App.scss';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import MainLayout from './layouts/MainLayout';
import ProtectedRoutes from './utils/ProtectedRoute';

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      path: '/admin',
      element: <ProtectedRoutes />,
      children: [
        {
          index: true,
          element: <Admin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
