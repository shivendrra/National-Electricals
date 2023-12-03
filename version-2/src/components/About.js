import React from 'react'
import '../App.css';
import Footer from './Footer';
import head1 from './assets/Pictures/Head1.png';
import head2 from './assets/Pictures/Head2.png';
import head3 from './assets/Pictures/Head3.png';
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-sec">
          <div className="row" style={{ padding: '50px 20px' }}>
            <div className="col-lg-12 pb-5">
              <div className="col-lg-12">
                <span className='text-center'>
                  <hr style={{ width: '100px', margin: 'auto', backgroundColor: '#8062D6', height: '8px' }} />
                  <h3 className='py-2'>Our <span className='clrdTxt'>Journey</span></h3>
                </span>
              </div>
              <div className="col-lg-12 main-info py-4">
                <div className="col-lg-12 text-center">
                  <p style={{ fontSize: '17px', fontWeight: '400', maxWidth: '90%', margin: 'auto', textAlign: 'justify' }}>Commencing in 1982, our journey took root as a workshop in Gorakhpur, specializing in the repair and manufacturing of welding machines, battery chargers, and inverters. We secured contracts with several significant organizations, including the U.P. State government, for projects encompassing irrigation, electricity, the North Eastern Railway, Indian Oil, and the Air Force. In 1999, recognizing the growth opportunities in the GIDA sector of Gorakhpur, we invested in a plot of land, culminating in the establishment of National Electricals on December 2, 1999. This was a pivotal moment that set the stage for our continued expansion. Over time, our operations evolved to encompass the production of heavy machinery, such as Transformers, Servo Stabilizers, and Panel Boards. Presently, we are strategically positioned to explore diversification and the development of new product lines in the coming years.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 pb-5">
              <div className="col-lg-12">
                <span className='text-center'>
                  <hr style={{ width: '100px', margin: 'auto', backgroundColor: '#8062D6', height: '8px' }} />
                  <h3 className='py-2'>Our <span className='clrdTxt'>Mission</span></h3>
                </span>
              </div>
              <div className="col-lg-12 main-info pt-4">
                <div className="col-lg-12 text-center">
                  <p style={{ fontSize: '17px', fontWeight: '400', maxWidth: '90%', margin: 'auto', textAlign: 'justify' }}>To adeptly comprehend the current and future requirements of both domestic and international markets and fulfill those expectations with cutting-edge, efficient, and cost-effective solutions. Furthermore, the aim is to consistently enhance the value of National's products and services through the application of innovations, integration of expertise, and steadfast adherence to professional ethics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cover-card" style={{ width: '93%', margin: 'auto' }}>
          <div className="row card-sec" style={{ margin: '-70px 0px 20px 0px' }}>
            <div className="col-lg-12">
              <span className='text-center'>
                <hr style={{ width: '100px', margin: 'auto', backgroundColor: '#8062D6', height: '8px' }} />
                <h3 className='py-2'>Our <span className='clrdTxt'>Heads</span></h3>
              </span>
            </div>
            <div className="col-lg-12 main-cards py-4">
              <div className="col-lg-4 col-sm-12">
                <div className="card my-2" style={{ width: '30rem' }}>
                  <img src={head1} className="card-img-top" style={{ height: '440px', objectFit: 'contain' }} alt="..." />
                  <div className="card-body text-center">
                    <h5 class="card-title">Harihar Singh  <h6 className='comp-lable'>Co-Founder & Chairman</h6></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card my-2" style={{ width: '30rem' }}>
                  <img src={head2} className="card-img-top" style={{ height: '440px', objectFit: 'contain' }} alt="..." />
                  <div className="card-body text-center">
                    <h5 class="card-title">Birendra Kumar Singh  <h6 className='comp-lable'>Co-Founder & Vice-Chairman</h6></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card my-2" style={{ width: '30rem' }}>
                  <img src={head3} className="card-img-top" style={{ height: '440px', objectFit: 'contain' }} alt="..." />
                  <div className="card-body text-center">
                    <h5 class="card-title">Sanjay Singh  <h6 className='comp-lable'>Managing Director</h6></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <br /><hr />
      <Footer />
    </>
  )
}
