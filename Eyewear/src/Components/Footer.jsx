import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import'./footer.css'

const Footer = () => {
  return (
  <footer className="footer">
  <div className="container">
    <div className="row">

      {/* Brand */}
      <div className="col-lg-4 col-md-6 mb-4">
        <h3 className="footer-logo">
          Eye<span className="gold-text">Wear</span>
        </h3>
        <p className="footer-text">
          Discover premium eyewear for every style. Quality, comfort and fashion – all in one place.
        </p>
      </div>

      {/* Links */}
      <div className="col-lg-2 col-md-6 mb-4">
        <h5 className="footer-title">Quick Links</h5>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className="footer-title">Support</h5>
        <ul className="footer-links">
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className="footer-title">Newsletter</h5>
        <p className="footer-text">Subscribe for latest updates</p>
        <div className="footer-input">
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="footer-bottom text-center">
      <p>© 2026 EyeWear. All Rights Reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;