import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Gif } from './gif/gif-component';

function App() {
  return (
    <div className="App">
      <Gif/>
      <button>Take a sip</button>
      <button>Stop taking a sip</button>
    </div>
  );
}

export default App;
