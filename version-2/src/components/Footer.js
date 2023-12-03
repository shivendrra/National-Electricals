import React from 'react'
import '../App.css';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row px-5 py-4">
          <div className="col-md-6 col-sm-12 text-lg-start text-center">
            <h5 className='all-right'><span style={{fontWeight: '700'}}>National Electricals</span> all rights reserved.</h5>
          </div>
          <div className="col-md-6 col-sm-12 text-lg-end text-center">
            <h5 className='shiv'>Site made by <span><a className='myLink' href='https://linktr.ee/shivendrra_'>Shivendra.</a></span> </h5>
          </div>
        </div>
      </div>
    </>
  )
}
