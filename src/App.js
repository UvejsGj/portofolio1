import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Button from "./Components/Button/Button";
import Drawer from "./Components/Drawer/Drawer";

function App() {
  return (
    <div className="App">
      <h1> WELCOME </h1>
      <Navbar />
      <About />
      <Footer />
      <Button />
    </div>
  );
}

export default App; 
