/* eslint-disable react/jsx-filename-extension */
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Tasks from './Pages/Tasks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;
