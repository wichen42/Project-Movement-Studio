import "./style.scss";
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home";
import NewsLetterLandingPage from "./components/NewsLetterLandingPage";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="newsletter" element={<NewsLetterLandingPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
