import "./aboutpage.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

// https://www.geeksforgeeks.org/how-to-animate-a-progress-bar-in-bootstrap/

const AboutPage = () => {
  return (
    <div>
      <Footer/>
      <Navbar/>
      <h1> I am Uvejs </h1>
      <p className="aboutmep">
          Hi, I am Uvejs from Peja. I'm learning React.js <br /> I also know
          HTML & CSS.
        </p>
      
      <h2 className="skills">
        My Skills
        </h2>
        <br></br>
        <div className="skillicons">
        HTML <AiFillHtml5/>
        <br></br>
        CSS <FaCss3Alt/>
        <br></br>
        JS <DiJavascript/>
        </div>

    <div className="certificate">
        <h2 className="certificates">
        
          My certificates
          <br></br>
          1. Stencyl
          <br></br>
          2. WEB Design       
          <br></br>
          3. HTML
          <br></br>
          4. CSS 
          <br></br>
          5. JavaScript
        </h2>
</div>

    </div>
  );
};

export default AboutPage;
