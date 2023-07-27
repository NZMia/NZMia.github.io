import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import generateRouterConfig from './routers/RouterConfig';
import './App.scss';

function App() {
  const [testData, setTestData] = useState<string>('');
  useEffect(() => {
    fetch('/hello')
      .then((res) => res.json())
      .then((data) => setTestData(data.data));
  }, []);
  const routerConfig = generateRouterConfig();
  const router = createBrowserRouter(routerConfig);
  return <RouterProvider router={router} />;
}

export default App;
