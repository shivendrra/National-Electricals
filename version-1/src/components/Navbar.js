import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../App.css'
export default function Navbar(props) {
  return(
    <>
      <nav id="mainNavbar" className={`navbar navbar-expand-lg navbar-light`}>
        <div id="innerNav" className="container-fluid">
          <Link className="navbar-brand mx-3" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/gallery">gallery.</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/products">products.</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/about">about.</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link mx-3" role='button' data-bs-toggle="dropdown" aria-expanded="false" to="/socials">socials.</Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://www.facebook.com/NationalElectricals">Facebook</a></li>
                  <li><a className="dropdown-item" href="/">Instagram</a></li>
                  <li><a className="dropdown-item" href="/">Youtube</a></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <button id='#conBtn' className="btn btn-outline">events.</button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  prodText: PropTypes.string
}

Navbar.defaultProps = {
  title: "National Electricals",
  aboutText: "about.",
  prodText: "products."
}

// <li className="nav-item">
// <button id='conBtn' className='btn btn-outline rounded-pill mx-3'>contact.</button>
// </li>