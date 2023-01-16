import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FaceProject from "../../../Assets/images/faceproject.png";
import BBCProject from "../../../Assets/images/bccproject.png";

const Slideshow = () => {
    return(
        <div>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={true}
            showIndicators={true}
            showThumbs={true}
            interval={5000}
            >
                <div>
                    <img loading="lazy" src={FaceProject}/>
                </div>
                 <div>
                    <img loading="lazy" src={BBCProject}/>
                </div> 
                
            </Carousel>
        </div>
    )
}

export default Slideshow;