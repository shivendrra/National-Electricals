import React from 'react'
import '../App.css';
// import Footer from './Footer';

export default function Form() {
  const handleSubmit = () => {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const text = document.getElementById('textarea').value;
    const checkBox1 = document.getElementById('gridCheck1').checked;
    const checkBox2 = document.getElementById('gridCheck2').checked;

    const formData = {
      name: firstName + " " + lastName,
      email: email,
      message: text,
      product: checkBox1,
      service: checkBox2
    };

    fetch('http://localhost:3001/form', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(formData)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Error writing data to file');
      }
      console.log('Data saved to file');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <>
      <div className="container form" onSubmit={handleSubmit}>
        <form>
        <div className="row p-2">
          <div className="col-lg-4 col-md-12">
            <div className="col-lg-10">
              <h4>Chat to us</h4>
              <p className='m-0'>Our team is there to help</p>
              <p>Nilesh@nationalelectricals.com</p>
            </div>
            <div className="col-lg-10">
              <h4>Visit Us</h4>
              <p className='m-0'>Come say hello at our office HQ</p>
              <p>AU-8, Sector 13, GIDA, Kalesar, Gorakhpur, Uttar Pradesh, India, 273209</p>
            </div>
            <div className="col-lg-10">
              <h4>Call us</h4>
              <p className='m-0'>Mon-Sat 9am to 5pm</p>
              <p>+91 9936954894</p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="form-txt col-lg-8 p-2">
              <h1>Want to work with us? What can we do for you?</h1>
              <p>Tell us more about your company and service you want</p>
            </div>
            <div className="input-group col-lg-12 p-2">
              <input type="text" placeholder='First Name' id='first' aria-label="First name" className="form-control" />
              <input type="text" placeholder='Last Name' id='last' aria-label="Last name" className="form-control" />
            </div>
            <div className="input-group col-lg-12 p-2">
              <input type="email" className="form-control" placeholder="Email" id='email' aria-label="Email" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group col-lg-12 p-2">
              <textarea className="form-control" id='textarea' placeholder='Tell us a little about your project......' aria-label="With textarea"></textarea>
            </div>
            <div className="check-form col-lg-12 p-2">
              <div className='col-lg-6'>
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label px-1" htmlFor="gridCheck1">Product</label>
              </div>
              <div className='col-lg-6'>
                <input className="form-check-input" type="checkbox" id="gridCheck2" />
                <label className="form-check-label px-1" htmlFor="gridCheck2">Service</label>
              </div>
            </div>
            <div className="col-lg-12 p-2">
              <button className='btn btn-outline-dark' type='submit'>Done</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}
