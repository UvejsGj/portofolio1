import Hamburger from "hamburger-react";
import "./Navbar.css";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="nav">
      <div
        className="divnavbar"
        onClick={() => setShowDrawer((prevState) => !prevState)}
      >
        <Hamburger color="white" />
      </div>

      {showDrawer ? <Drawer /> : null}
    </div>
  );
};

export default Navbar;
