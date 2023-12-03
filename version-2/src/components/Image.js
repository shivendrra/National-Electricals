import React from 'react';

export default function Image(props) {

  return (
    <>
      <div className="img-thumb">
        <img src={props.src} alt="a pic" className='p-3'/>
      </div>
    </>
  );
}
