import Hamburger from "hamburger-react";
import "./Navbar.css";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="divnavbar" onClick={() => setShowDrawer((prevState) => !prevState)}>
      <Hamburger />

    </div>
      // {showDrawer ? <Drawer /> : null}
  );
};

export default Navbar;
