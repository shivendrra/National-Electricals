import React from 'react'
import pic1 from './Assets/pic1.jpg'
import pic2 from './Assets/pic2.jpg'

export default function Carousel() {
  return (
    <>
    <div className='gallery d-flex justify-content-center'>
      <br/><br/>
      <div className="row px-3 g-4">
        <div className="col-lg-3 col-sm-3">
          <div className="card">
            <img src={pic2} className="card-img" alt="..." />
          </div>
        </div>
        <div className="col-lg-3 col-sm-3">
          <div className="card">
            <img src={pic1} className="card-img" alt="..." />
          </div>
        </div>
        <div className="col-lg-3 col-sm-3">
          <div className="card">
            <img src={pic2} className="card-img" alt="..." />
          </div>
        </div>
        <div className="col-lg-3 col-sm-3">
          <div className="card">
            <img src={pic1} className="card-img" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <br/>
    </>
  )
}
