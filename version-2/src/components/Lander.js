import '../App.css';
import React from 'react';
import Footer from './Footer'
import headImg from './assets/SVG/HeaderImg-1.svg'
import manufacture from './assets/SVG/manufacture.png';
import service from './assets/SVG/service.png';
import transformer from './assets/SVG/transformer.png';
import Work from './Work';
import Form from './Form';
import Contact from './Contact';

export default function Lander() {
  return (
    <>
      <div className="header">
        <div className='container'>
          <div className='row'>
            <div className="col-lg-12 head-sec">
              <div className="col-lg-6 col-sm-12">
                <h3 style={{ fontSize: '55px', lineHeight: '40px', fontFamily: 'Space Grotesk', color: 'white', textShadow: '1px 1px 3px #1919191a7' }}>We <span className='clrdTxt'>Build</span> Machines.</h3>
                <p style={{ fontSize: '30px', opacity: '70%', fontFamily: 'Space Grotesk', fontWeight: '300', color: 'white', textShadow: '1px 1px 3px #1919191a7' }}>/ National Electricals /</p>
              </div>
              <div className="col-lg-6 col-sm-12 m-auto img-sec">
                <img src={headImg} alt="headerImage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      <div className="section">
        <div className="row we-do m-auto">
          <div className="col-lg-12 col-sm-12 works-hd">
            <span className='text-center'>
              <hr style={{ width: '100px', margin: 'auto', backgroundColor: '#8062D6', height: '8px' }} />
              <h3 className='py-2 m-auto'>What we <span className='clrdTxt'>do?</span></h3>
            </span>
          </div>
          <div className="col-lg-4 text-center">
            <img src={manufacture} style={{ height: '200px', objectFit: 'contain', border: 'none', padding: '0px', margin: '-30px 0px' }} alt="..." />
            <h5 style={{ fontSize: '25px' }}>Heavy Machine Manufacturing</h5>
            <p style={{ fontSize: '17px', lineHeight: '25px', fontWeight: '300' }}>We manufacture servo stabilizers, electrical panels boards, electroplating rectifiers, power transformers, and other heavy machinery.</p>
          </div>
          <div className="col-lg-4 text-center">
            <img src={service} style={{ height: '200px', objectFit: 'contain', border: 'none', padding: '0px', margin: '-30px 0px' }} alt="..." />
            <h5 style={{ fontSize: '25px' }}>Consulting & Advising</h5>
            <p style={{ fontSize: '17px', lineHeight: '25px', fontWeight: '300' }}>We provide consulting and advising support from our side, to help you choose the best machines for your purpose and use them efficiently.</p>
          </div>
          <div className="col-lg-4 text-center">
            <img src={transformer} style={{ height: '200px', objectFit: 'contain', border: 'none', padding: '0px', margin: '-30px 0px' }} alt="..." />
            <h5 style={{ fontSize: '25px' }}>Service & Contract Work</h5>
            <p style={{ fontSize: '17px', lineHeight: '25px', fontWeight: '300' }}>We provide free servicing to our clients. We also build machines as specified by our clients and customize them according to their needs.</p>
          </div>
        </div>
      </div>

      <div className="vision-div m-auto" style={{backgroundColor: 'whitesmoke', padding: '50px 0px'}}>
        <hr style={{ width: '100px', margin: 'auto', backgroundColor: '#8062D6', height: '8px' }} />
        <h3 className='py-2 m-auto text-center'>Our <span className='clrdTxt'>Vision</span></h3>
        <p className='text-center' style={{ maxWidth: '80%', margin: 'auto', fontSize: 'larger', fontWeight: '300' }}>To establish a prominent and influential presence in the manufacturing and distribution of reliable power conditioning solutions, including high-capacity transformers and servo stabilizers, by fostering a proficient network of channel partners both domestically and internationally.</p>
      </div>

      <br /><br />
      <Work />
      <br /><br />
      <Form />
      <br /><br />
      <Contact />
      <br /><hr />
      <Footer />
    </>
  )
}