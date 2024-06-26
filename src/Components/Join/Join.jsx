import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='join' id="join-us">
        <div className='left-j'>
            <hr />
            <div>
            <span>READY TO</span>
            <span>LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span>WITH US</span>
            </div>
        </div>
        <div className='right-j'></div>
      <form onSubmit={sendEmail} ref={form} className="email-container">
        <input type="email"  name="user_email" placeholder='enter your email address'/>
        <button className='btn btn-j'>JOIN NOW</button>
      </form>
    </div>
  )
}

export default Join
