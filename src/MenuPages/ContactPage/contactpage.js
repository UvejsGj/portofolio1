import "./contactpage.css"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hwn8yd3', 'template_tvejwed', form.current, '9fxzNLQgpQaMiISwG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="group">
        <Navbar/>
        <Footer/>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label className="form-input-label" > Your Name
            <input className="form-input" type="text" name="user_name" />
            </label>
            <br/>
            <label className="form-input-label"> Your Email
            <input className="form-input" type="text" name="user_email" />
            </label>
            <br/>
            <label className="form-input-label" > About Your Project
            <input className="form-input" type="text" /> 
            </label>
            <button className="custom-button" > Send </button>
        </form>
        </div>
    )
}

export default Contact;