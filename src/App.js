import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './Navigation';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';



function App() {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  
  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/:email/:password" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;