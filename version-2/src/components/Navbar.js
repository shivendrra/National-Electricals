import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

export default function Navbar(props) {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        if (window.scrollY > 0) {
          setScrolled('scrolled-main-pg');
        } else {
          setScrolled(' ');
        }
      } else {
        setScrolled('scrolled-oth-pg');
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [location.pathname]);

  return (
    <>
      <nav id="mainNavbar" className={`px-4 py-3 navbar navbar-expand-lg fixed-top ${scrolled ? scrolled : ''}`}>
        <div id="innerNav" className="container-fluid">
          <Link className={`navbar-brand mx-3 ${scrolled ? scrolled : ''}`} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} to="/gallery">gallery.</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} to="/product">products.</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} to="/about">about.</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} role='button' data-bs-toggle="dropdown" aria-expanded="false" to="/socials">socials.</Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://www.facebook.com/NationalElectricals">Facebook</a></li>
                  <li><a className="dropdown-item" href="https://www.instagram.com/national_electrical/?igshid=MTNiYzNiMzkwZA%3D%3D">Instagram</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button id='conBtn' className='btn btn-outline mx-3' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">contact.</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Contact</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <span>
            <h4><span className='clrdTxt'>Chat</span> to Us</h4>
            <p className='m-0'>Our team is there to help</p>
            <p style={{ fontWeight: '500', opacity: '95%' }}>nationalelectricalsgkp@gmail.com</p>
          </span>
          <span>
            <h4><span className='clrdTxt'>Visit</span> Us</h4>
            <p className='m-0'>Come say hello at our office HQ</p>
            <p style={{ fontWeight: '500', opacity: '95%' }}>AU-8, Sector 13, GIDA, Kalesar, Gorakhpur, Uttar Pradesh, India, 273209</p>
          </span>
          <span>
            <h4><span className='clrdTxt'>Call</span> Us</h4>
            <p className='m-0'>Mon-Sat 9am to 5pm</p>
            <p style={{ fontWeight: '500', opacity: '95%' }}>+91 9452190777, +91 9452189627</p>
          </span>
            </div>
          </div>
        </div>
      </div>
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

