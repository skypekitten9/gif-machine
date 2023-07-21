import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Gif } from './gif/gif-component';

function App() {
  return (
    <div className="App">
      <Gif/>
      <button style={{backgroundColor: '#d2e7d6'}}>Start sipin</button>
      <button style={{backgroundColor: '#fdaaaa'}}>Stop sipin</button>
    </div>
  );
}

export default App;
