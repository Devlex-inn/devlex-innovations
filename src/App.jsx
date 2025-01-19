import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/AboutUs';
import Service from './component/Service';
import ServiceDetails from './component/ServiceDetails';
import Contact from './component/Contact';
import Ourmission from './component/OurMission';
import Whychoose from './component/Whychoose';
import Faq from './component/Faq';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourmission" element={<Ourmission />} />
        <Route path="/whychoose" element={<Whychoose />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
