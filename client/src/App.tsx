import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [testData, setTestData] = useState<string>('');
  useEffect(() => {
    fetch('/hello')
      .then((res) => res.json())
      .then((data) => setTestData(data.data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{testData}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
