import React, { useState } from 'react';
import '../App.css';
import pic1 from './assets/Pictures/gallery1.png'
import pic3 from './assets/Pictures/gallery3.png'
import pic4 from './assets/Pictures/gallery4.png'
import pic5 from './assets/Pictures/gallery5.png'
import pic6 from './assets/Pictures/gallery24.png'
import pic7 from './assets/Pictures/gallery6.png'
import pic8 from './assets/Pictures/gallery8.png'
import pic9 from './assets/Pictures/gallery9.png'
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
import pic22 from './assets/Pictures/gallery22.png'
import pic23 from './assets/Pictures/pic11.jpg'
import pic24 from './assets/Pictures/pci12.jpg'
import Footer from './Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imageSrc) => {
    // Update the selected image in the state
    setSelectedImage(imageSrc);
  };

  const handleCloseCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container gallery">
        <div className="row">
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='10' src={pic10} className='img-thumbnail' onClick={() => handleClick(pic10)} stlye={{ width: '100px', bjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='11' src={pic11} className='img-thumbnail' onClick={() => handleClick(pic11)} stlye={{ width: '100px', bjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='12' src={pic12} className='img-thumbnail' onClick={() => handleClick(pic12)} stlye={{ width: '100px', bjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='13' src={pic13} className='img-thumbnail' onClick={() => handleClick(pic13)} stlye={{ width: '100px', bjectFit: 'contain' }} alt="." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='14' src={pic14} className='img-thumbnail' onClick={() => handleClick(pic14)} stlye={{ width: '100px', bjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='15' src={pic15} className='img-thumbnail' onClick={() => handleClick(pic15)} stlye={{ width: '100px', bjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='7' src={pic7} className='img-thumbnail' onClick={() => handleClick(pic7)} stlye={{ width: '100px', hbjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='8' src={pic8} className='img-thumbnail' onClick={() => handleClick(pic8)} stlye={{ width: '100px', hbjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='9' src={pic9} className='img-thumbnail' onClick={() => handleClick(pic9)} stlye={{ width: '100px', hbjectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='10' src={pic1} className='img-thumbnail' onClick={() => handleClick(pic10)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='2' src={pic6} className='img-thumbnail' onClick={() => handleClick(pic6)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='3' src={pic3} className='img-thumbnail' onClick={() => handleClick(pic3)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='4' src={pic4} className='img-thumbnail' onClick={() => handleClick(pic4)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='5' src={pic5} className='img-thumbnail' onClick={() => handleClick(pic5)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='16' src={pic16} className='img-thumbnail' onClick={() => handleClick(pic16)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='17' src={pic17} className='img-thumbnail' onClick={() => handleClick(pic17)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='18' src={pic18} className='img-thumbnail' onClick={() => handleClick(pic18)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='19' src={pic19} className='img-thumbnail' onClick={() => handleClick(pic19)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='20' src={pic20} className='img-thumbnail' onClick={() => handleClick(pic20)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-2 col-sm-4 g-2">
            <img id='21' src={pic21} className='img-thumbnail' onClick={() => handleClick(pic21)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='24' src={pic24} className='img-thumbnail' onClick={() => handleClick(pic24)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='11' src={pic11} className='img-thumbnail' onClick={() => handleClick(pic11)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='22' src={pic22} className='img-thumbnail' onClick={() => handleClick(pic22)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
          <div className="col-lg-3 col-sm-6 g-2">
            <img id='23' src={pic23} className='img-thumbnail' onClick={() => handleClick(pic23)} stlye={{ width: '100px', objectFit: 'contain' }} alt="." />
          </div>
        </div>
      </div>
      <hr/>
      <Footer />

      {selectedImage && (
        <div className="row gallery-carousel">
          <div className="col-lg-12">
            <div className="container">
              <div className="close-button" onClick={handleCloseCarousel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner" style={{borderRadius: '0px', boxShadow: '9px 9px #8062D6'}}>
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

.gallery {
  padding: 130px 0px 50px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.img-thumbnail {
  border: none;
  padding: 0px;
  border-radius: 0px;
}

.img-thumbnail:hover {
  box-shadow: 5px 5px #8062D6;
  cursor: pointer;
}

.gallery-carousel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Adjust the opacity as needed */
  z-index: 9999; /* Ensure it's above other content */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  overflow: auto;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
}

.gallery-carousel .showcase {
  max-width: 80%;
  max-height: 80%;
  margin: auto;
}


import React from 'react';
import images from './imagesSrc.json';

export default function Gallery() {
  const imageElements = [];

  for (const key in images) {
    if (images.hasOwnProperty(key)) {
      const imagePath = images[key];
      imageElements.push(<img src={imagePath} id={key} alt="a pic" className='p-3' />);
    }
  }

  return (
    <>
      <div className="gallery">
        <div className="img-sec">
          {imageElements}
        </div>
      </div>
    </>
  );
}
