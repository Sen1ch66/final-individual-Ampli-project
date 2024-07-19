import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './Components/AboutMe/AboutMe';
import UserLogin from './UserLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginHeader from './Components/LoginHeader/LoginHeader';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/AboutMe' element={<AboutMe/>}/>
      <Route path='*' element={<LoginHeader/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
