import React from 'react'
import '../App.css';
import Footer from './Footer';
import rectifier from './assets/Pictures/rectifier1.png'
import controller from './assets/Pictures/voltageStabilizer.png'
import transformer from './assets/Pictures/transformer3.png'
import panelboard from './assets/Pictures/pannel3.png'

export default function Products() {

  const DownloadBrochure = () => {
    console.log("download");
    window.location.href = 'https://drive.google.com/file/d/17hetkGA3EF1BRnyVh3kRom8sw3YXIy7S/view?usp=sharing';
  }

  return (
    <>
      <div className="products row" style={{ padding: '120px 20px' }}>
        <div className="col-lg-12 py-3">
          <h4 className='text-center quote' style={{ maxWidth: '80%', margin: 'auto' }}><b>"</b><em>Our dedication to crafting these industrial essentials is more than just a business; it's a passion. We are committed to empowering your operations, ensuring they run smoothly, efficiently, and profitably. With our machinery at your side, you're not just investing in equipment; you're investing in the future of your business.</em><b>"</b></h4>
        </div>
        <div className="prod-sec">
          <div className="col-lg-12 py-3">
            <span className='text-center'>
              <hr style={{ width: '100px', margin: 'auto', backgroundColor: '#8062D6', height: '8px' }} />
              <h3 className='py-2'>Our <span className='clrdTxt'>Products</span></h3>
            </span>
          </div>
          <div className="col-lg-12 products-div mx-auto">
            <div className="col-lg-6 text-center">
              <span>
                <img src={controller} style={{height: '400px', objectFit: 'cover', padding: '20px 0px'}} alt="." />
              </span>
              <h5>Automatic Voltage Controllers</h5>
              <p>Our automatic voltage controllers are precision-engineered guardians of voltage stability. They ensure your electrical systems operate flawlessly, protecting your equipment from voltage fluctuations and downtime.</p>
            </div>
            <div className="col-lg-6 text-center">
              <span>
                <img src={rectifier} style={{height: '400px', objectFit: 'cover', padding: '20px 0px'}} alt="." />
              </span>
              <h5>Electroplating Rectifier</h5>
              <p>Precision is our mantra when it comes to power rectifiers. We create these devices to efficiently convert alternating current (AC) into direct current (DC), providing the steady power needed for critical industrial processes.</p>
            </div>
            <div className="col-lg-6 text-center">
              <span>
                <img src={transformer} style={{height: '400px', objectFit: 'cover', padding: '20px 0px'}} alt="." />
              </span>
              <h5>Power Transformer</h5>
              <p>Our transformers are the unsung heroes of electrical systems. Crafted with care, they step up or step down voltage levels, ensuring seamless power transfer across your facility.</p>
            </div>
            <div className="col-lg-6 text-center">
              <span>
                <img src={panelboard} style={{height: '400px', objectFit: 'cover', padding: '20px 0px'}} alt="." />
              </span>
              <h5>Electric Panel Boards</h5>
              <p>Our electrical panels are the nerve centers of your power distribution network. Designed with meticulous attention to detail, they organize and control the flow of electricity, enhancing safety and efficiency.</p>
            </div>
          </div>
        </div>
        <div className="brochure d-flex justify-content-center p-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 g-3 text-center">
              <h1>Get our online <span className='clrdTxt'> Catalogue.</span></h1>
            </div>
            <div className="col-md-12 col-sm-12 g-3 text-center">
              <button className='btn btn-outline-dark' onClick={DownloadBrochure}>Download</button>
            </div>
          </div>
        </div>
      </div >
      <br />
      <hr />
      <Footer />
    </>
  )
}
