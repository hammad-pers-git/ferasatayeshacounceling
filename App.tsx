import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SpecializedAreas from './components/SpecializedAreas';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AboutModal from './components/AboutModal';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <About onOpenAbout={() => setIsAboutModalOpen(true)} />
        <Services />
        <SpecializedAreas />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </div>
  );
};

export default App;