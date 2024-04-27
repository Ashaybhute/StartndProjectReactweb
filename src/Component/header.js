import logo from '../assets/logo.webp';
import headerCSS from './header.module.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <nav className={"navbar sticky-top navbar-expand-lg navbar-light " + headerCSS.navbar} >
        <div className="container-fluid">
          <Link to="/home" className={headerCSS.logoWithMargin}><img src={logo} className={headerCSS.logoImg} alt="logo" ></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/home">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/faqs">FAQs</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
  