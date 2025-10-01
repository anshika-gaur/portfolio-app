import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Anshika
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Home</a>
            <a href="#about" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">About</a>
            <a href="#projects" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">Contact</a>
            <a href="https://www.linkedin.com/in/anshika-gaur-a51b54364/" target="_blank" rel="noopener noreferrer" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/anshika-gaur" target="_blank" rel="noopener noreferrer" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">GitHub</a>
            <a href="https://leetcode.com/u/Anshika-Gaur/" target="_blank" rel="noopener noreferrer" className="text-purple-700 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">LeetCode</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              ☰
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
              <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              <a href="https://www.linkedin.com/in/anshika-gaur-a51b54364/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
              <a href="https://github.com/anshika-gaur" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
              <a href="https://leetcode.com/u/Anshika-Gaur/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">LeetCode</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
