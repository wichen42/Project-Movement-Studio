import About from "../components/About";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import { ImNewspaper } from "react-icons/im";

const Home = () => {
  const handleNewsButton = () => {
    console.log("clicked");
  };

  return (
    <div className="home-container">
        <Header />
        <About /> 
        <Programs />
        <Credentials />
        <Testimonials />
        <Contact />
        <Footer />
        <div className="newsletter-button">
          <ImNewspaper />
        </div>
    </div>
  );
};

export default Home;