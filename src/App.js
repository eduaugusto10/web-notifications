import React, { useState } from 'react';
import { getTokens } from './firebase'
import logo from './logo.svg';
import './App.css';

function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  getTokens(setTokenFound);

  // inside the jsx being returned:

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isTokenFound && "Notificação permitida 👍🏻"}
        {!isTokenFound && "Necessita permitir notificação ❗"}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
