import React from 'react';
import '../CSS/WebsiteAPI.css';
import Todos from './Todos';
import Posts from './Posts';
import Albums from './Albums';
import Info from './Info';
import LoginPage from './LoginPage';
import ApplicationPage from './ApplicationPage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Website() {
    return (
<Router>

      <Routes> 
        <Route path="/app" element={<ApplicationPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
        
        <Route path="/posts" element={<Posts />} />    
        <Route path="/albums" element={<Albums />} />    
        <Route path="/info" element={<Info />} />    
        <Route path="/todos" element={<Todos />} />    
      </Routes>
    </Router>
      );
}

export default Website;
