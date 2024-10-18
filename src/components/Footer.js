import React from 'react';
import './styles/Footer.css';
import footerImage from './imgs/footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Digital Den ©</p>
        <p>Kent Louis Arizo</p>
        <div className="footer-image">
          <img src={footerImage} alt="Footer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
