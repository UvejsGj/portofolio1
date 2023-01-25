import "./contactpage.css"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const initialInputs = {
    from_name: "",
    from_email: "",
    message: "",
};

const Contact = () => {
    const [inputs, setInputs] = useState(initialInputs);

    const form = useRef();

    const sendEmail = (e) => {
        // e.stopPropagation();
        e.preventDefault();

        console.log(form.current)

        emailjs.sendForm('service_hwn8yd3', 'template_sw1w2uv', form.current, '9fxzNLQgpQaMiISwG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <div className="group">
            <Navbar />
            <form action="" ref={form} onSubmit={sendEmail} className="contact-form">
                <label className="form-input-label" > Your Name
                    <input required name="from_name" value={inputs.from_name} onChange={handleChange} className="form-input" type="text"  />
                </label>
                <br />
                <label required className="form-input-label"> Your Email
                    <input name="from_email" value={inputs.from_email} onChange={handleChange} className="form-input" type="text"  />
                </label>
                <br />
                <label required className="form-input-label" > About Your Project
                    <input name="message" value={inputs.message} onChange={handleChange} className="form-input" type="text"  />
                </label>
                <button className="custom-button" > Send </button>
            </form>

            <Footer />
        </div>
    )
}

export default Contact;