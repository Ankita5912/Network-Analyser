import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import ContactUs from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route element></Route>
    </Routes>
    <Navbar></Navbar>
     <Header></Header>
     <About/>
     <ContactUs/>
     <Footer/>
    </Router>
     
    </>
  );
}

export default App;
