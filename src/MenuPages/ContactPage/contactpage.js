import "./contactpage.css"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Contact = () => {
    return(
        <div className="group">
        <Navbar/>
        <Footer/>
        <form className="contact-form">
            <label className="form-input-label"> Your Name
            <input className="form-input" type="text"  />
            </label>
            <br/>
            <label className="form-input-label"> Your Email
            <input className="form-input" type="text" />
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