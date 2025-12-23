import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GetStarted from './components/Services';
import SpecializedAreas from './components/SpecializedAreas';
import Fees from './components/fees';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AboutModal from './components/AboutModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

type View = 'main' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('main');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[var(--bg-cream)]">
      <Navbar onHomeClick={() => navigateTo('main')} />
      
      <main className="flex-grow">
        {view === 'main' ? (
          <>
            <Hero />
            <About onOpenAbout={() => setIsAboutModalOpen(true)} />
            <GetStarted />
            <SpecializedAreas />
            <Fees />
            <FAQ />
            <Contact />
          </>
        ) : view === 'privacy' ? (
          <PrivacyPolicy onBack={() => setView('main')} />
        ) : (
          <TermsOfUse onBack={() => setView('main')} />
        )}
      </main>

      <Footer 
        onPrivacyClick={() => navigateTo('privacy')} 
        onTermsClick={() => navigateTo('terms')}
      />
      
      <FloatingActions />
      
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </div>
  );
};

export default App;
