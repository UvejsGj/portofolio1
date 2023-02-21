import "./About.css";
import aboutmepic from "../../Assets/images/aboutme1.png";
import Button from "../../Components/Button/Button"
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="responsive">
      <div className="aboutmediv">
        <img id="aboutmeimg" src={aboutmepic} />
      </div>
      <div className="aboutmepb">
        <p id="aboutmepid" className="aboutmep">
          Hi, Welcome to my Portofolio.
        </p>
        <Link className="link" to="/about" onClick={()=>window.scroll(0, 0)} >
        <Button/>
        </Link>
        <div className="featuredprojects">
        <h1> Featured Projects </h1>
        <p> Ask the X Project - Where Students ask the community for help about school subjects or homework. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
