import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import React, {useState} from 'react';
import Assignment from './Component/Assignment'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleBackground = () => {
        setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <h1>Color Toggle App</h1>
        <button onClick={toggleBackground}>Toggle Background</button>

      <div>
        <h1>My Greeting Cards</h1>
        <Assignment
          recipientName="Ritik"
          occasion="Happy Birthday"
          greeting="Wishing you all the best on your special day!"
          />
        <Assignment
          recipientName="Rohan"
          occasion="Happy Holi"
          greeting="May your Holi be filled with colors, joy and laughter!"
          />
      </div>
</div>
     </>
  );
}

export default App;
