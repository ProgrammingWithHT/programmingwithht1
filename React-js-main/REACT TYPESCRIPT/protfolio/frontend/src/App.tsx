import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/myskills/Skills';
import Services from './components/services/Services'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
