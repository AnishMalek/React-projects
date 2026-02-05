import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Eyewear</h2>
          <p>
            Shop stylish eyeglasses, sunglasses and power glasses with premium
            quality and comfort.
          </p>
        </div>

        <div className="footer-links">
          <h3>Shop</h3>
          <a href="#">Eyeglasses</a>
          <a href="#">Sunglasses</a>
          <a href="#">Power Glasses</a>
          <a href="#">Kids Glasses</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Stores</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Help</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
