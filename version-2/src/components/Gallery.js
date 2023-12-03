import React, { useState } from 'react';
import pic1 from './assets/Pictures/gallery1.png'
import pic3 from './assets/Pictures/gallery3.png'
import pic5 from './assets/Pictures/gallery5.png'
import pic6 from './assets/Pictures/gallery24.png'
import pic7 from './assets/Pictures/gallery6.png'
import pic10 from './assets/Pictures/pic1.jpg'
import pic11 from './assets/Pictures/pic2.jpg'
import pic12 from './assets/Pictures/pic3.jpg'
import pic13 from './assets/Pictures/pic4.jpg'
import pic14 from './assets/Pictures/pic5.jpg'
import pic15 from './assets/Pictures/pic6.jpg'
import pic16 from './assets/Pictures/pic13.jpg'
import pic17 from './assets/Pictures/pic15.jpg'
import pic18 from './assets/Pictures/pic16.jpg'
import pic19 from './assets/Pictures/pic17.jpg'
import pic20 from './assets/Pictures/pic18.jpg'
import pic21 from './assets/Pictures/pic14.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imageSrc) => {
    console.log(imageSrc);
    setSelectedImage(imageSrc);
  };

  const handleCloseCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="gallery">
        <div className="img-section">
          <img id='10' src={pic10} className='img-thumbnail' onClick={() => handleClick(pic10)} stlye={{ bjectFit: 'contain' }} alt="." />
          <img id='11' src={pic11} className='img-thumbnail' onClick={() => handleClick(pic11)} stlye={{ bjectFit: 'contain' }} alt="." />
          <img id='12' src={pic12} className='img-thumbnail' onClick={() => handleClick(pic12)} stlye={{ bjectFit: 'contain' }} alt="." />
          <img id='13' src={pic13} className='img-thumbnail' onClick={() => handleClick(pic13)} stlye={{ bjectFit: 'contain' }} alt="." />
          <img id='14' src={pic14} className='img-thumbnail' onClick={() => handleClick(pic14)} stlye={{ bjectFit: 'contain' }} alt="." />
          <img id='15' src={pic15} className='img-thumbnail' onClick={() => handleClick(pic15)} stlye={{ bjectFit: 'contain' }} alt="." />
          <img id='7' src={pic7} className='img-thumbnail' onClick={() => handleClick(pic7)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='10' src={pic1} className='img-thumbnail' onClick={() => handleClick(pic10)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='2' src={pic6} className='img-thumbnail' onClick={() => handleClick(pic6)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='3' src={pic3} className='img-thumbnail' onClick={() => handleClick(pic3)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='5' src={pic5} className='img-thumbnail' onClick={() => handleClick(pic5)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='16' src={pic16} className='img-thumbnail' onClick={() => handleClick(pic16)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='17' src={pic17} className='img-thumbnail' onClick={() => handleClick(pic17)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='18' src={pic18} className='img-thumbnail' onClick={() => handleClick(pic18)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='19' src={pic19} className='img-thumbnail' onClick={() => handleClick(pic19)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='20' src={pic20} className='img-thumbnail' onClick={() => handleClick(pic20)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='21' src={pic21} className='img-thumbnail' onClick={() => handleClick(pic21)} stlye={{ objectFit: 'contain' }} alt="." />
          <img id='11' src={pic11} className='img-thumbnail' onClick={() => handleClick(pic11)} stlye={{ objectFit: 'contain' }} alt="." />

        </div>
      </div>

      <hr />
      <Footer />

      {selectedImage && (
        <div className="row gallery-carousel">
          <div className="col-lg-12">
            <div className="container">
              <div className="close-button" onClick={handleCloseCarousel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner" style={{ borderRadius: '0px', boxShadow: '9px 9px #8062D6' }}>
                  <div className="carousel-item active">
                    <img src={selectedImage} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
