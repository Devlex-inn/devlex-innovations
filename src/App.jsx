import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/AboutUs';
import Service from './component/Service';
import Contact from './component/Contact';
import Ourmission from './component/OurMission';
import Whychoose from './component/Whychoose';
import Faq from './component/Faq';
import WebDevelopment from './component/WebDevelopment';
import UiUxDesign from './component/UIUXDesign';
import AppDevelopment from './component/AppDevelopment';
import DigitalMarketing from './component/DigitalMarketing';
import VideoEditing from './component/VideoEditing';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/UIUX-design" element={<UiUxDesign />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/video-editing" element={<VideoEditing />} />


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
