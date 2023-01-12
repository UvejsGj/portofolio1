import "./Drawer.css";

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="container">
        <ul className="drawer-items">
          <Link>
            <li> Home </li>
            <li> About </li>
            <li> Work </li>
            <li> Contact me </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
