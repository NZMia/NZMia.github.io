import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import generateRouterConfig from './routers/RouterConfig';

import './App.scss';

function App() {
  const routerConfig = generateRouterConfig();
  const router = createBrowserRouter(routerConfig);
  return <RouterProvider router={router} />;
}

export default App;
