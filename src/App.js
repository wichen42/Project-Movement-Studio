import "./style.scss";
import Home from "../src/components/Home";
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsLetterLandingPage from "./components/NewsLetterLandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="newsletter" element={<NewsLetterLandingPage />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
