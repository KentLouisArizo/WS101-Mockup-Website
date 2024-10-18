import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;