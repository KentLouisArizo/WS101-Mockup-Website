import React from 'react';
import './styles/ContactUs.css';
import contactImage from './imgs/contact1.png'; 

const ContactUs = () => {
  return (
    <div className="contact-us" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>We would love to hear from you! Please feel <br />
            free to contact us with any questions or <br />
            comments.
          </p>
          <p>You can reach us by:</p>
          <div className="contact1">
            <ul>
                <li>Email: digitalden@example.com</li>
                <li>Phone: +63 912 345 6789</li>
                <li>Address: Iligan City, Philippines</li>
            </ul>
        </div>
        <p>Follow us on social media:</p>
        <div className="contact2">
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </div>
        <p>We look forward to hearing from you!</p>
    </div>
    <div className="contact-image">
        <img src={contactImage} alt="Contact methods" />
    </div>
    </div>
    </div>
  );
};

export default ContactUs;
