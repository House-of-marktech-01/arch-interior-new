import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog101 from "./blogs/Blog101";
import Blog102 from "./blogs/Blog102";
import Blog103 from "./blogs/Blog103";
import Blog104 from "./blogs/Blog104";
import WhoAreWe from "./pages/WhoAreWe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/101" element={<Blog101 />} />
          <Route path="/blog/102" element={<Blog102 />} />
          <Route path="/blog/103" element={<Blog103 />} />
          <Route path="/blog/104" element={<Blog104 />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
