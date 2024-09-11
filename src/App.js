import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Classes from './components/Classes';
import Trainers from'./components/Trainers';
import Events from './components/Events';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Info from './components/Info';
import CollapseNavbar from './components/CollapseNavbar';
import Footer from './components/Footer';
import ImageRow from './components/ImageRow';
function App() {
  return (
    <>
    
       <Router>
       <Info/>    
      <Navbar/>
      <CollapseNavbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Trainers" element={<Trainers />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
    </Router>
    
    <ImageRow/>
    <Footer/>
    </>
  );
}

export default App;
