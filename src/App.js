import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Programs from "./components/Programs";
import Credentials from "./components/Credentials";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Programs />
      <Credentials />
      <Testimonials />
    </div>
  );
}

export default App;
