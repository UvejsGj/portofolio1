import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <a className="githublogo" href="https://github.com/UvejsGj">
            <BsGithub />
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
        <a className="name">
          © Uvejs Gjelaj <br /> <SiGmail className="gmail-logo" />{" "}
          uvejsgjelaj03@gmail.com{" "}
        </a>{" "}
      </footer>
    </div>
  );
};

export default Footer;
