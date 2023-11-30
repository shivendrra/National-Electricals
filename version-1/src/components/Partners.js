import React, { useEffect } from 'react';
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

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <>
      <div className="row" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyItems: 'center',
        margin: 'auto'
      }}>
        <div className="col-lg-12" style={{ padding: '50px 0px 30px 0px' }}>
          <h3 className='text-center'><span className='clrdTxt'>Trusted</span> by</h3>
        </div>
        <div className="col-lg-12 main-clients">
          <div className="col-lg-2 col-sm-6">
            <img src={gallant} style={{ padding: '10px', height: '70px', objectFit: 'fill'}} data-bs-toggle="tooltip" data-bs-toggle-className="tooltip" data-bs-placement="bottom" data-bs-title="Gallantt Steel Works" onClick={gallantClicked} alt="." />
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={igl} style={{ padding: '10px', height: '100px', objectFit: 'fill'}} data-bs-toggle="tooltip" data-bs-toggle-className="tooltip" data-bs-placement="bottom" data-bs-title="IGL: Indraprastha Gas Limited" onClick={iglClicked} alt="." />
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={bhusal} style={{ padding: '10px', height: '100px', objectFit: 'fill'}} data-bs-toggle="tooltip" data-bs-toggle-className="tooltip" data-bs-placement="bottom" data-bs-title="Bhushal Group, Nepal" onClick={bhusalClicked} alt="." />
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={magic} style={{ padding: '10px', height: '100px', objectFit: 'fill'}} data-bs-toggle="tooltip" data-bs-toggle-className="tooltip" data-bs-placement="bottom" data-bs-title="3D-Magic Solutions" onClick={magicClicked} alt="." />
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={lfs} style={{ padding: '10px', height: '100px', objectFit: 'fill'}} data-bs-toggle="tooltip" data-bs-toggle-className="tooltip" data-bs-placement="bottom" data-bs-title="Little Flower School, Gorakhpur" onClick={lfsClicked} alt="." />
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={splice} style={{ padding: '10px', height: '80px', objectFit: 'fill'}} data-bs-toggle="tooltip" data-bs-toggle-className="tooltip" data-bs-placement="bottom" data-bs-title="Splice Laminates" onClick={spliceClicked} alt="." />
          </div>
        </div>
        <div className="col-lg-12 text-center" style={{ padding: '25px 0px 0px 0px', margin: 'auto' }}>
          <h5 style={{fontSize: 'large', fontWeight: '400'}}>and many <span className='clrdTxt'>more....</span></h5>
        </div>
      </div>
    </>
  )
}
