import React, { useContext } from 'react';
import type { ReactElement } from 'react';
import logo from '../assets/logos.svg';
import { ThemeContext } from '../contexts/ThemeProvider';

const Home = (): ReactElement => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page page__home">
      <div className={`img img--${theme}`}>
        <img src={logo} alt="This is mia logo" />
      </div>
      <h2>Mia Zhang</h2>
      <h3>Hello World</h3>
      <button className="button">Project</button>
    </div>
  );
};

export default Home;
