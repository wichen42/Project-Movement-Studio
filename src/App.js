import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Programs from "./components/Programs";
import Credentials from "./components/Credentials";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Programs />
      <Credentials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
