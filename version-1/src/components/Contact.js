import React from 'react'
import '../App.css'

export default function Contact() {
  return (
    <>
      <div className="d-flex justify-content-center px-5">
        <div id="cont-box" className="row">
          <div className='main-contact col-lg-12'>
              <h5>Contact us</h5>
              <h6>nationalelectricals@gmail.com</h6>
              <h6>AU-8, Sector 13, GIDA, Kalesar, Gorakhpur,</h6>
              <h6>Uttar Pradesh, India, 273209</h6>
          </div>
          <div className="col-lg-12">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d531.6149555563259!2d83.24554611812113!3d26.746381592108808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399138a7b0abd783%3A0x5333fd02ab727365!2sAmar%20Ujala%20Limited!5e0!3m2!1sen!2sin!4v1683396181278!5m2!1sen!2sin" style={{border:'0px', height: '300px', width: '100%', borderRadius: '10px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
