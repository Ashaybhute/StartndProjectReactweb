import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/header';
import HomeScreen from './Component/homeScreen';
import AboutUsScreen from './Component/aboutUs';
import Footer from './Component/footer';
import Pricing from './Component/pricing';
import Faqs from './Component/faqs';
import ContactUsScreen from './Component/contactUs';


function App() {
  return (
   <>
      <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUsScreen />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUsScreen />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
   </>
  );
}

export default App;
