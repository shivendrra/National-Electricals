import React from 'react'
import Footer from './Footer';
import '../App.css';
import head1 from './assets/MainPics/Head1.png'
import head2 from './assets/MainPics/Head2.png'
import head3 from './assets/MainPics/Head3.png'

export default function About() {
  return (
    <>
      <br />
      <div id='abt-cont' className='container d-flex justify-content-center'>
        <div className='row'>
          <div className="col-lg-12 g-3 text-center">
            <h2 className='abt-hd'>/ about us. /</h2>
            <hr />
          </div>
          <div className="col-lg-6 col-md-12 p-2 text-center">
              <p className='abt-para'>Our journey started from the year 1982 when Shri Harihar Singh and his younger brother Shri Birendra Kumar Singh started repairing and manufacturing welding machines, battery chargers and inverters in a small shop in Gorakhpur. They continued this for a few years untill they recieved a work contract by U.P. State government to work in projects related to irrigation, electricity board in North Eastern Railway, Indian Oil, Airforce, etc.<br/> In 1999, when U.P. government started alloting industrial plots in GIDA sector of Gorakhpur city, they bought a land there and on 2nd Dec of year 1999, they established National Electricals. Few years later, Mr. Sanjay Singh, eldest son of Harihar Singh joined his father's buisness, helping them to manufacture some heavy machines.<br/>Today we build heavy machines like Transformers, Servo Stabilizers, Pannel Boards, etc. and we are planning to step in some manufacturing of some other products also in coming years.</p>
          </div>
          <div className="col-lg-6 col-md-12 p-3">
            <div className="d-flex justify-content-lg-center">
              <iframe className='yt-video' style={{width:'640px', height:'380px'}} src="https://www.youtube.com/embed/qksGJ_9zwZE" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="YouTube video" allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-lg-12 g-3 text-center">
            <h2 className='abt-hd'>/ our heads. /</h2>
            <hr />
          </div>
          <div className="col-lg-12 g-3">
            <div class="card mb-3 d-flex justify-content-baseline">
              <div class="row g-0">
                <div class="col-lg-3 col-md-5">
                  <img src={head1} style={{objectFit: "contain"}} class="img-fluid rounded" alt="..." />
                </div>
                <div class="col-lg-9 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Harihar Singh  <h6 className='comp-lable'>Co-Founder & Chairman</h6></h5>
                    <hr></hr>
                    <p class="card-text">He is the chairman of the company, started this company along with his brother and focused on the technology side of the business. After compeleting his schooling he pursued degree in Polytechnique, through which he learned the skills that lead him to this stage. He worked on several government projects before starting the company, in some of them he was joined by his brother.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 g-3">
            <div class="card mb-3 d-flex justify-content-baseline">
              <div class="row g-0">
                <div class="col-lg-3 col-md-5">
                  <img src={head2} style={{objectFit: "contain"}} class="img-fluid rounded" alt="..." />
                </div>
                <div class="col-lg-9 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Birendra Kumar Singh  <h6 className='comp-lable'>Co-Founder & Vice-Chairman</h6></h5>
                    <hr></hr>
                    <p class="card-text">Birendra Singh or "chowkidar" (as he likes to call himself) is younger brother of Harihar Singh and he joined his brother in working field just after his college graduation. He doesn't have any science background, as he studied arts in school and college but he has a very good learner. He learned the basics and expertise of these machines by spending a lot of time working on them and by helping his brother in the projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 g-3">
            <div class="card mb-3 d-flex justify-content-baseline">
              <div class="row g-0">
                <div class="col-lg-3 col-md-5">
                  <img src={head3} style={{objectFit: "contain"}} class="img-fluid rounded" alt="..." />
                </div>
                <div class="col-lg-9 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Sanjay Singh  <h6 className='comp-lable'>Managing Director</h6></h5>
                    <hr></hr>
                    <p class="card-text">Sanjay Singh, eldest son of Harihar singh, developed interest in machines by watching his father and uncle working on these machines and decided to persue Polytechnique degree from college. After graduating from college, he joined his father and uncle in the company and helped them to build and manufacture new products. He now handles daily operations and tech end in the company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      {/* footer */}
      <Footer/>
    </>
  )
}