import "./About.css";
import aboutmepic from "../../Assets/images/aboutme1.png";

const About = () => {
  return (
    <div>
      <div className="aboutmediv">
        <img className="aboutmeimg" src={aboutmepic} />
      </div>
      <div>
        <p className="aboutmep">
          Hi, I am Uvejs from Peja. I'm learning React.js <br /> I also know
          HTML & CSS.
        </p>
      </div>
    </div>
  );
};

export default About;
