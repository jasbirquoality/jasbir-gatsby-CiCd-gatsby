import React,{useState} from 'react'
import {Link} from 'gatsby'
import {FiAlignJustify} from 'react-icons/fi';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [show, setshow] = useState(false);

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <button className="nav-btn" onClick={() => setshow(!show)}>
            <FiAlignJustify />
          </button>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setshow(false)}
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setshow(false)}
            >
              Recipes
            </Link>
            <Link
              to="/tags"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setshow(false)}
            >
              Tags
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setshow(false)}
            >
              About
            </Link>
            <div className="nav-link contact-link">
              <Link
                to="/contact"
                className="btn"
                onClick={() => setshow(false)}
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
