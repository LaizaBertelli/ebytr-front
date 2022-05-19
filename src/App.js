/* eslint-disable react/jsx-filename-extension */
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
