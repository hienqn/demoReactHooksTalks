import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Counter from './Counter';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes);

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes}>
        <Counter />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
