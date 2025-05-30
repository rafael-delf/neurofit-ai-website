
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
