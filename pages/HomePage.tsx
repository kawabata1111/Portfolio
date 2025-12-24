import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import Works from '../components/Works';
import Contact from '../components/Contact';

interface HomePageProps {
  startAnimation: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ startAnimation }) => {
  return (
    <>
      <Hero startAnimation={startAnimation} />
      <Services />
      <Philosophy />
      <Works />
      <Contact />
    </>
  );
};

export default HomePage;
