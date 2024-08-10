import React from 'react';

function Header({ onLabsClick }) {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="path-to-university-logo.png" alt="University Logo" className="h-12 mr-4" />
          <img src="path-to-bajaj-logo.png" alt="Bajaj Logo" className="h-12" />
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <button 
                onClick={onLabsClick} 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Labs
              </button>
            </li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
