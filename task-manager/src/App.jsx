import React from 'react';
import './App.css'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">Welcome to Task Manager</h1>
      <p className="text-gray-300 text-lg mb-8">
        Organize and track your tasks efficiently.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
};

export default App
