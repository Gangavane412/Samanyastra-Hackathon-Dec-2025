import React from 'react';
import "../assets copy/css/style.css";
// import "../assets copy/js/script.js";
// import "../assets copy/js/app.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
    <header className="shadow-sm fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
  <a href="/" className="navbar-brand text-white position-relative" style={{
  fontSize: '1.5rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
}}>
  <i className="fas fa-graduation-cap me-2 hover-icon"></i>
  <span className="hover-text">Gangavane Priyanka</span>
  <span className="hover-underline" style={{
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '0',
    height: '4px',
    backgroundColor: 'cyan',
    transition: 'width 0.3s ease, opacity 0.3s ease',
    opacity: 0
  }}></span>
</a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#project">Work</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link " href="/#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;