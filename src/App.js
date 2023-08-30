import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Programs from "./components/Programs";
import Credentials from "./components/Credentials";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Programs />
      <Credentials />
    </div>
  );
}

export default App;
