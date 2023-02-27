import "./aboutpage.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsGithub } from "react-icons/bs"

// https://www.geeksforgeeks.org/how-to-animate-a-progress-bar-in-bootstrap/

const AboutPage = () => {
  return (
    
    <div>
      
    <Navbar />

      <div className="skilldiv">
      <h1>My Skills:</h1>
      <div className="icons" >
        <AiFillHtml5 className="htmlicon" />
        <FaCss3Alt className="cssicon" />
        <DiJavascript className="javaicon"/>
        <BsGithub className="giticon" />
        </div> 
      </div>

      <div className="certificate">
        <h1 className="certificates">
          My Certificates:
          </h1>
          <ol className="certificatesp">
          <li>Completed Course of Web and Mobile Game Development with STENCYL</li>
          <li>Completed Course of JavaScript Fundamentals - Beginner </li>
          <li> Completed Course of Web Development - Beginner </li>
          <li> Completed Course of Web Development </li>
          <li>Completed Course of React JS Basics </li>
          </ol>
      </div>
      <div className="academicbackground" >
        <ol>
          <h1> Academic Background </h1>  
          <li> Primary School: SHFMU Dardania </li>
          <li> High School: Teknike Informatik Biznesit </li>
          <li> Course: Center For Education X </li>
          </ol> 
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;