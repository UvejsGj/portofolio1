import "./aboutpage.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

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
    </div>
  );
};

export default AboutPage;
