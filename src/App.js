import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
