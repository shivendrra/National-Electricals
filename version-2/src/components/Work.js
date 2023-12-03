import React from 'react';
import Partners from './Partners';
import partner from './assets/SVG/partners.png';
import electrician from './assets/SVG/electrician.png';
import excellent from './assets/SVG/excellent.png';
import expert from './assets/SVG/experts.png'

export default function Work() {
  return (
    <>
      <div className="work-with">
        <div className="row">
          <div className="col-lg-12">
            <div className='text-center container'>
              <hr style={{ width: '100px', margin: '0px auto', backgroundColor: '#8062D6', height: '8px' }} />
              <h3 className='py-2'>Our <span className='clrdTxt'>Clients</span></h3>
              <p style={{ fontSize: 'larger', fontWeight: '300' }}>At the core of our philosophy lies an unwavering commitment to excellence. We don't just provide services; we partner with our clients to understand their unique challenges and solve them effectively. Our track record is a testament to our dedication to delivering results.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 clients-div py-4 m-auto">
          <div className="col-lg-6 col-sm-12 text-center px-3 gy-3">
            <span>
              <img src={expert} style={{height: '220px', border: 'none', padding: '0px', margin: '-30px 0px'}} alt="..." />
            </span>
            <h5>Expertise and Dedication:<span className='clrdTxt'> Your Solution, Our Mission</span></h5>
            <p style={{fontWeight: '300'}}>At the core of our philosophy lies an unwavering commitment to excellence. We don't just provide services; we partner with our clients to understand their unique challenges and solve them effectively. Our track record is a testament to our dedication to delivering results.</p>
          </div>
          <div className="col-lg-6 col-sm-12 text-center px-3 gy-3">
            <span>
              <img src={excellent} style={{height: '220px', border: 'none', padding: '0px', margin: '-30px 0px'}} alt="..." />
            </span>
            <h5>Proven Excellence:<span className='clrdTxt'> A History of Success</span></h5>
            <p style={{fontWeight: '300'}}>Our journey is defined by the success stories we've created with clients like yours. We've had the privilege of collaborating with a diverse range of companies and clients, each presenting its own set of challenges. It's through these partnerships that we've consistently demonstrated our expertise and problem-solving capabilities.</p>
          </div>
          <div className="col-lg-6 col-sm-12 text-center px-3 gy-3">
            <span>
              <img src={electrician} style={{height: '220px', border: 'none', padding: '0px', margin: '-30px 0px'}} alt="..." />
            </span>
            <h5>Understanding Your Needs:<span className='clrdTxt'> Beyond the Surface</span></h5>
            <p style={{fontWeight: '300'}}>We don't just scratch the surface; we delve deep into the intricacies of your challenges. By thoroughly understanding your needs and goals, we can provide tailored solutions that truly address the heart of the issue. Our ability to do so has made a substantial impact on the success of our clients.</p>
          </div>
          <div className="col-lg-6 col-sm-12 text-center px-3 gy-3">
            <span>
            <img src={partner} style={{height: '220px', border: 'none', padding: '0px', margin: '-30px 0px'}} alt="..." />
            </span>
            <h5>A Partnership, Not Just a Service: <span className='clrdTxt'> Your Success is Our Success</span></h5>
            <p style={{fontWeight: '300'}}>We believe in forging partnerships, not just providing services. Your success is our driving force, and we take pride in being an integral part of your journey. By working hand-in-hand with you, we ensure that your problems are not just solved but transformed into opportunities for growth.</p>
          </div>
        </div>
        <br/>
      </div>
      <Partners />
    </>
  )
}
