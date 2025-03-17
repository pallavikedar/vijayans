import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";

import Faq from "./Pages/Faq";
import Chetna from "./Pages/Chetna";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
     
          <Route path="/faq" element={<Faq />} />
          <Route path="/chetna" element={<Chetna />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
