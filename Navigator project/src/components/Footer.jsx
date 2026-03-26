import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Oud<span>Wale</span>
          </h2>
          <p>
            Premium long-lasting fragrances crafted for luxury lovers.
            Bold. Smooth. Timeless.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@oudwale.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 OudWale. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;