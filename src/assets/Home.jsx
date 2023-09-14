import About from "../components/About";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="home-container">
        <Header />
        <About /> 
        <Programs />
        <Credentials />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;