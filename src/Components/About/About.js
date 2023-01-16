import "./About.css";
import aboutmepic from "../../Assets/images/aboutme1.png";
import Button from "../../Components/Button/Button"

const About = () => {
  return (
    <div>
      <div className="aboutmediv">
        <img className="aboutmeimg" src={aboutmepic} />
      </div>
      <div className="aboutmepb">
        <p className="aboutmep">
          Hi, I am Uvejs from Peja. I'm learning React.js <br /> I also know
          HTML & CSS.
        </p>
        
        <Button/>
      </div>
    </div>
  );
};

export default About;
