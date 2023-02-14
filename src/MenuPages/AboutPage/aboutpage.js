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
      <Footer />
      <Navbar />

      <div className="skilldiv">
        My Skills:
        <br></br>
        HTML <AiFillHtml5 />
        <br></br>
        CSS <FaCss3Alt />
        <br></br>
        JS <DiJavascript />
      </div>

      <div className="certificate">
        <h1 className="certificates">
          My certificates:
          </h1>
          <p className="certificates">
          <br></br>
          1. Completed Course of Web and Mobile Game Development with STENCYL.
          <br></br>
          2. Completed Course of JavaScript Fundamentals - Beginner
          <br></br>
          3. Completed Course of Web Development - Beginner
          <br></br>
          4. Completed Course of Web Development
          <br></br>
          5. Completed Course of React JS Basics
          </p>
      </div>
    </div>
  );
};

export default AboutPage;
