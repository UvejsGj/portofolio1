import "./About.css";
import boy from "../../Assets/images/uvejsbitmoji.png";

const About = () => {
  return (
    <div>
      <div className="aboutmediv">
        <img className="aboutmeimg" src={boy} />
      </div>
      <div>
        <p className="aboutmep">
          Hi, I am Uvejs from Peja. I'm learning React.js <br /> I also know HTML & CSS.
        </p>
      </div>
     
    </div>
  );
};

export default About;
