import React from 'react';
import '../App.css';
import myImg1 from './assets/SVGs/Facture.svg'
import Contact from './Contact';
import Footer from './Footer';
import Work from './Work';
import Form from './Form'

export default function Lander() {
  
  const handleClick=() => {
    window.location.href = '/products';
  }

  return (
  <>
    <div className='mainImg container'>
      <div className="row">
        <div className="col-lg-12 col-sm-12 px-5">
          <div className='group-head text-center'>
            <h1 className="mainHd">We <span className='clrdTxt'>build</span> machines.</h1>
            <h3 className='mainHeading'>/ National Electricals /</h3>
          </div>
        </div>
      </div>
    </div>
    
    <br/><br/> 
    
    <div className="we-do container py-5 px-3">
      <div className="row d-flex gx-3 gy-3">
        <div className="col-lg-6 col-md-12 px-5">
          <div className="text-center">
            <img className='we-do-pic' style={{objectFit: "contain"}} src={myImg1} alt="icon" /> 
          </div>
        </div>
        <div className="col-lg-6 col-md-12 py-3 px-5 text-left">
          <h1>What we do?</h1>
          <p>We build transformers, servo stabilizers, and other heavy machinery, we also service these machines and work on given contracts.</p>
          <button className='btn btn-outline-dark' onClick={handleClick}>See more</button>
        </div>
      </div>
    </div>
    <br />
    <br/>
    <br/>
  {/* Worked with */}
    <Work />
    <br />
    <br />
    <br />
    <Form />
    <br />
    <br />
    <br />
  {/* Contact Us */}
    <Contact />
    <hr />
  {/* Footer */}
    <Footer />
  </>
  )
}
