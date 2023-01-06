import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
      <a className="instalogo" href="https://www.instagram.com/uvejs_gjelaj/">
          <BsInstagram />
        </a>
        <a
          className="facebooklogo"
          href="https://www.facebook.com/uvejs.gjelaj/"
        >
          <BsFacebook />
        </a>
        <a className="twitterlogo" href="https://twitter.com/uvejsgjelaj03">
          <BsTwitter />
        </a>
        </div>
        <a className="name">© Uvejs Gjelaj</a>{" "}
        
      </footer>
    </div>
  );
};

export default Footer;
