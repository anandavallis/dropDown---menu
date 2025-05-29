import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <div className="app-container">
      <h1>React Dropdown Menu</h1>

      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {isDropdownOpen ? 'Hide Menu ' : 'Show Menu '}
        </button>

        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li><a href="#home" onClick={closeDropdown}>Home</a></li>
            <li><a href="#about" onClick={closeDropdown}>About</a></li>
            <li><a href="#services" onClick={closeDropdown}>Services</a></li>
            <li><a href="#contact" onClick={closeDropdown}>Contact</a></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
