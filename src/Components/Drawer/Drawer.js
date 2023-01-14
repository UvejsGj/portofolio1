import "./Drawer.css";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="container">
        <ul className="drawer-items">
        
            <li>  <Link className="home" to="/"> Home </Link></li>
            <li> <Link className="about" to="/about"> About </Link></li>
            <li> <Link className="work" to="/work"> Work </Link></li>
            <li> <Link className="contact" to="/contact"> Contact me </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
