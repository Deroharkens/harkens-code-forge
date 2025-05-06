
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Team from '@/components/Team';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Team />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
