import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Ram App .Dev</div>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="navbar-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#portfolio" className="navbar-link">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#services" className="navbar-link">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#blog" className="navbar-link">
              BLOG
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
