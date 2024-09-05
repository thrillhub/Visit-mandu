import React from 'react'
import './Footer.css'
import Visa from '../../assets/images/visa.png';
import MasterCard from '../../assets/images/mastercard.png';
import AmericanExpress from '../../assets/images/americanexpress.png';

function Footer() {
  return (
    <>
    <footer className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <h4 className="footer-title">Company Info</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tellus vitae justo blandit ultrices.</p>
        <h4 className="footer-title">We Accept</h4>
        <div className="payment-methods">
          <img src={Visa} alt="Visa" className="payment-icon" />
          <img src={MasterCard} alt="MasterCard" className="payment-icon" />
          <img src={AmericanExpress} alt="American Express" className="payment-icon" />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <h4 className="footer-title">Quick Links</h4>
        <ul className="footer-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <h4 className="footer-title">Rooms</h4>
        <ul className="footer-list">
          <li><a href="#">Single Rooms</a></li>
          <li><a href="#">Double Rooms</a></li>
          <li><a href="#">Studio Rooms</a></li>
          <li><a href="#">Kingsize Rooms</a></li>
          <li><a href="#">Presidentsuite Rooms</a></li>
          <li><a href="#">Luxury Kings Rooms</a></li>
          <li><a href="#">Connecting Rooms</a></li>
          <li><a href="#">Murphy Rooms</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <h4 className="footer-title">Contact Info</h4>
        <ul className="footer-contact-info">
          <li>Tel: 977-222-444-6666</li>
          <li>Email: info@Gautama.com.np</li>
          <li>Fax: 977-222-444-666</li>
          <li>Address: 445 Mount Eden Road,<br />Sundarbasti, Chakrapath</li>
        </ul>
      </div>
    </div>
  </div>
  <hr />
  
  <footer className="bottom-footer-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <p>
          Copyright 2020. Made with <a href="#" className="footer-link">Cyclone Themes</a>. 
          All Rights Reserved. <a href="#" className="footer-link">Gautama</a>
        </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="social-icons">
          <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-google"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>
</footer>

      
    </>
  )
}

export default Footer
