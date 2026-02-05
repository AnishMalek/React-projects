import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <h2>Eyewear</h2>
        </div>

        {/* Nav */}
        <nav className="header-nav">
          <a href="#" className="active-link">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Button */}
        <div className="header-btn-box">
          <button className="header-btn">Shop Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
