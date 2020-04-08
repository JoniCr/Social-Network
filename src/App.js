import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-container">
      <Navbar />
      <Profile />
      </div>
    </div>
  );
}

export default App;
