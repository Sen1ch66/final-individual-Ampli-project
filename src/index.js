import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './Components/AboutMe/AboutMe';
import PageNotFound from './Components/PageIsntFound/PageIsntFound';
import UserLogin from './UserLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/AboutMe' element={<AboutMe/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
