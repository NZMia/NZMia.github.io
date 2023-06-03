import React from 'react';
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import ProtectedRoutes from './utils/ProtectedRoute';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/',
      element: <Home />,
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
