import React from 'react';
import { NavLink } from 'react-router-dom';
// import { trackMixpanelEvent } from '../lib/mixpanel';
// import { navLinkStatus } from '../lib/routing';
/**
 * Component: NavLinkCustom
 * A custom NavLink component with optional tooltip support
 *
 * @param to - The destination URL for the NavLink
 * @param label - The content / icon to display in the NavLink
 * @param tooltipTitle - Optional tooltip text to display when hovering over the NavLink
 * @param className - Optional CSS class name for styling the NavLink
 * @param onSelect - Optional callback function to handle NavLink selection
 * @param trackPath - Optional path to track with Mixpanel analytics
 * @returns A NavLink component that renders the provided label with optional tooltip
 */

const NavBar = () => {
  const handleNavLinkClick = (e: React.MouseEvent) => {
    console.log('handleNavLinkClick');
  };
  return (
    <nav className='nav'>
      <div className='nav__left'>
        <NavLink to='/' onClick={handleNavLinkClick} className='nav__link'>
          Home
        </NavLink>
      </div>

      <div className='nav__right'>
        <NavLink to='/about' onClick={handleNavLinkClick} className='nav__link'>
          About
        </NavLink>
        <NavLink to='/project' onClick={handleNavLinkClick} className='nav__link'>
          Project
        </NavLink>
        <NavLink to='resume' onClick={handleNavLinkClick} className='nav__link'>
          Resume
        </NavLink>
        <NavLink end to='/admin' onClick={handleNavLinkClick} className='nav__link'>
          Admin
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
