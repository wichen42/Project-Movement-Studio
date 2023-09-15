import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IconContext } from 'react-icons';


const Home = () => {
  const bannerRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (bannerRef.current && !bannerRef.current.contains(e.target)) {
        setShowBanner(false);
      };
    };

    if (showBanner) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    };

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showBanner]);

  const handleNewsButton = () => {
    setShowBanner(!showBanner); 
  };

  const handleSubmit = () => {
    console.log("submit");
    setShowBanner(false);
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
        <div className="newsletter-button" onClick={handleNewsButton}>
          <ImNewspaper />
        </div>
        <div className={`newsletter-banner ${showBanner ? "show" : ""}`} ref={bannerRef}>
          <div className="banner-body">
        <IconContext.Provider value={{style: {size: "10px"}}}>
            <div className="banner-close" onClick={() => setShowBanner(false)}>
              <AiOutlineCloseCircle />
            </div>
          </IconContext.Provider>
          <div className="banner-main">

            <div className="banner-text">
              <span>SUBSCRIBE FOR WEEKLY NEWSLETTERS</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="banner-form">
              <input type="text" placeholder="Email Address" />
              <div className="banner-button" onClick={handleSubmit}>Submit</div>
            </div>
          </div>
          </div>
        </div>

    </div>
  );
};

export default Home;