import React from 'react';
import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
const MainLayout = () => (
  <div className="main">
    <div className="main__nav">
      <NavBar />
    </div>
    <div className="main__content">
      <Outlet />
    </div>
    <div className="main__footer">Copyright © {new Date().getFullYear()} Developed by Mia</div>
  </div>
);

export default MainLayout;
