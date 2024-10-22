

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import IndustrialPreFab from './pages/IndustrialPreFab';
import Navbar from './components/Navbar';
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industrial-prefab" element={<IndustrialPreFab />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
