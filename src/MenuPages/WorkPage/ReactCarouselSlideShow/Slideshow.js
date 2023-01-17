import { Carousel } from "react-responsive-carousel";
import "./Slideshow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FaceProject from "../../../Assets/images/faceproject.png";
import BBCProject from "../../../Assets/images/bccproject.png";
import AskTheX from "../../../Assets/images/askthex.png";

const Slideshow = () => {
  return (
    <div className="carouselslideshow">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={true}
        showIndicators={true}
        showThumbs={true}
        interval={5000}
      >
        <div className="faceprojects">
          <img loading="lazy" src={FaceProject} />
        </div>
        <div className="bbcprojects">
          <img loading="lazy" src={BBCProject} />
        </div>
        <div className="ashkthex">
          <img loading="lazy" src={AskTheX} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slideshow;
