import "./contactpage.css"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Contact = () => {
    return(
        <div>
        <Navbar/>
        <Footer/>
        <form className="form">
            <input type="text"  />
            <br></br>
            <input type="text" />
            <br></br>
            <input type="text" /> 
        </form>
        </div>
    )
}

export default Contact;