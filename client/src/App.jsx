import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import Services from './pages/Services';


export default function App() {
  return <BrowserRouter>
     
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/properties' element={<Properties/>} />
        <Route path='/services' element={<Services/>} />
        
       </Routes>
  </BrowserRouter>;
  
};
