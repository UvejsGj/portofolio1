import "./App.css";
import HomePage from "./MenuPages/HomePage/homepage";
import AboutPage from "./MenuPages/AboutPage/aboutpage";
import WorkPage from "./MenuPages/WorkPage/workpage";
import ContactPage from "./MenuPages/ContactPage/contactpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
