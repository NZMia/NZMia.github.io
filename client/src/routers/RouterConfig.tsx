import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Admin from '../pages/Admin';
import PageNotFound from '../pages/PageNotFound';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoutes from './ProtectedRoute';
import { Routers } from '../modules/enum';

const generateRouterConfig = () => [
  {
    path: Routers.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Routers.LOGIN,
        element: <Login />,
      },
      {
        path: Routers.SIGNUP,
        element: <SignUp />,
      },
    ],
  },
  {
    path: Routers.ADMIN,
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default generateRouterConfig;
