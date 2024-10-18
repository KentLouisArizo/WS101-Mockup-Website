import React from 'react';
import './styles/AboutUs.css';
import aboutImage from './imgs/about1.png';

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>Whether you're a casual gamer or a competitive <br/>
          esports player, we have something for everyone. <br/>
          Come visit us today and experience the thrill <br/>
          of gaming at Digital Den!</p>
          <p>With high-performance PCs, comfy chairs, fast <br/>
          internet, friendly staff, and a variety of games. <br/>
          Come experience the thrill of gaming at Digital <br/>
          Den!</p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Gaming setup keyboard" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;