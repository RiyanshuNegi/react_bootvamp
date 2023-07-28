import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import React, {useState} from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleBackground = () => {
        setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="App">

      
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <h1>Color Toggle App</h1>
        <button onClick={toggleBackground}>Toggle Background</button>
      </div>
    
      </div>
  );
}

export default App;
