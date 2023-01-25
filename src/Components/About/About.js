import "./About.css";
import aboutmepic from "../../Assets/images/aboutme1.png";
import Button from "../../Components/Button/Button"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="aboutmediv">
        <img className="aboutmeimg" src={aboutmepic} />
      </div>
      <div className="aboutmepb">
        <p className="aboutmep">
          Hi, Welcome to my Portofolio.
        </p>
        <Link className="link" to="/about" onClick={()=>window.scroll(0, 0)} >
        <Button/>
        </Link>
      </div>
    </div>
  );
};

export default About;
