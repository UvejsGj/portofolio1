import Navbar from "../../Components/Navbar/Navbar"
import About from "../../Components/About/About"
import Footer from "../../Components/Footer/Footer"
import Button from "../../Components/Button/Button"

function HomePage() {
    return(
        <div>
        <h1> WELCOME </h1>
      <Navbar />
      <About />
      <Footer />
      <Button />
      </div>
    )
}

export default HomePage;