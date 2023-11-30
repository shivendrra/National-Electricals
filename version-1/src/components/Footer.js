import React from 'react'
import '../App.css';

export default function Footer() {
  return (
    <>
      <div className="footer row">
        <div className="col-md-6 px-5 py-4">
          <h5 className='all-right'><span>National Electricals</span> all rights reserved.</h5>
        </div>
        <div className="col-md-6 px-5 py-4">
          <h5 className='shiv d-flex justify-content-md-end justify-content-sm-center'>Site made by <span><a className='myLink' href='https://www.linkedin.com/in/shivendra-singh-818a02212/'> Shivendra.</a></span> </h5>
        </div>
      </div>
    </>
  )
}
