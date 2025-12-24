import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [heroStart, setHeroStart] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <CustomCursor />
      
      <AnimatePresence mode="wait" onExitComplete={() => setHeroStart(true)}>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {/* 
        Main content rendered normally. 
        Scroll locking is handled by Preloader component.
      */}
      <div>
        <Navigation />
        <main>
          {/* Pass the start trigger to Hero */}
          <Hero startAnimation={heroStart} />
          <Services />
          <Philosophy />
          <Works />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;