import './App.css';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import FindIDPage from './components/Pages/FindIDPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/FindIDPage' element={<FindIDPage />} />
      </Routes>
    </div>
  );
}