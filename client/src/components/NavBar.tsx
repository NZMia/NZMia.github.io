import React, { useState, useContext } from 'react';
import { BulbOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';

const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [language, setLanguage] = useState('English 🇳🇿');
  const handleLangChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setLanguage(language === 'English 🇳🇿' ? '中文 🇨🇳' : 'English 🇳🇿');
  };
  const handleThemeChange = (e: React.MouseEvent<HTMLSpanElement>): void => {
    e.preventDefault();
    toggleTheme();
  };
  return (
    <div className="navBar">
      <div className="navBar__right">
        <a className="navBar__home" href="">
          Home
        </a>
        <span className="navBar__theme button--text" onClick={handleThemeChange}>
          <BulbOutlined />
        </span>
        <span className="navBar__language button--text" onClick={handleLangChange}>
          {language}
        </span>
      </div>

      <div className="navBar__menu">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blogs">blogs</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
