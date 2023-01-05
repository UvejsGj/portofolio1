import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer>
        <a className="name">© Uvejs Gjelaj</a>{" "}
        <a className="instalogo" href="https://www.instagram.com/uvejs_gjelaj/">
          <BsInstagram />
        </a>
        <a
          className="facebooklogo"
          href="https://www.facebook.com/uvejs.gjelaj/"
        >
          <BsFacebook />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
