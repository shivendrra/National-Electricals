import React from 'react';
import gallant from './assets/SVG/gallant.png';
import igl from './assets/SVG/igl.png';
import bhusal from './assets/SVG/bhusal.png';
import magic from './assets/SVG/3d-magic.webp';
import splice from './assets/SVG/splice.png';
import lfs from './assets/SVG/lfs.png';

export default function Partners() {
  const gallantClicked = () => {
    console.log('clicked');
    window.location.href = 'https://gallantt.com/';
  }
  const iglClicked = () => {
    console.log('clicked');    
    window.location.href = 'https://www.iglonline.net/';
  }
  const bhusalClicked = () => {
    console.log('clicked');    
    window.location.href = 'https://bhusalgroup.com/';
  }
  const magicClicked = () => {
    console.log('clicked');    
    window.location.href = 'https://www.3dmagic.org/';
  }
  const lfsClicked = () => {
    console.log('clicked');    
    window.location.href = 'https://www.littleflowerschoolgkp.com/';
  }
  const spliceClicked = () => {
    console.log('splice clicked');
    window.location.href = 'https://www.spliceply.com/';
  }


  return (
    <>
      <div className="row pb-5" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyItems: 'center',
        margin: 'auto',
        backgroundColor: 'whitesmoke'
      }}>
        <div className="col-lg-12" style={{ padding: '50px 0px 30px 0px' }}>
          <h3 className='text-center'><span className='clrdTxt'>Trusted</span> by</h3>
        </div>
        <div className="col-lg-12 main-clients">
          <div className="col-lg-2 col-sm-6 m-auto">
            <img src={gallant} style={{ padding: '10px', height: '70px', objectFit: 'fill', margin: 'auto'}} onClick={gallantClicked} alt="." />
            <p className='text-center' style={{ fontSize: '16px'}}>Gallantt Steel Works</p>
          </div>
          <div className="col-lg-2 col-sm-6 m-auto">
            <img src={igl} style={{ padding: '10px', height: '100px', objectFit: 'fill', margin: 'auto'}} onClick={iglClicked} alt="." />
            <p className='text-center' style={{ fontSize: '16px'}}>Indraprasth Gas Limited</p>
          </div>
          <div className="col-lg-2 col-sm-6 m-auto">
            <img src={bhusal} style={{ padding: '10px', height: '100px', objectFit: 'fill', margin: 'auto'}} onClick={bhusalClicked} alt="." />
            <p className='text-center' style={{ fontSize: '16px'}}>Bhushal Group, Nepal</p>
          </div>
          <div className="col-lg-2 col-sm-6 m-auto">
            <img src={magic} style={{ padding: '10px', height: '100px', objectFit: 'fill', margin: 'auto'}} onClick={magicClicked} alt="." />
            <p className='text-center' style={{ fontSize: '16px'}}>3d Magic Solutions</p>
          </div>
          <div className="col-lg-2 col-sm-6 m-auto">
            <img src={lfs} style={{ padding: '10px', height: '100px', objectFit: 'fill', margin: 'auto'}} onClick={lfsClicked} alt="." />
            <p className='text-center' style={{ fontSize: '16px'}}>Little Flower School</p>
          </div>
          <div className="col-lg-2 col-sm-6 m-auto">
            <img src={splice} style={{ padding: '10px', height: '80px', objectFit: 'fill', margin: 'auto'}} onClick={spliceClicked} alt="." />
            <p className='text-center' style={{ fontSize: '16px'}}>Splice Laminates</p>
          </div>
        </div>
        <div className="col-lg-12 text-center" style={{ padding: '25px 0px 0px 0px', margin: 'auto' }}>
          <h5 style={{fontSize: 'large', fontWeight: '400'}}>and many <span className='clrdTxt'>more....</span></h5>
        </div>
      </div>
    </>
  )
}
