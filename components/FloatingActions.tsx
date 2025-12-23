import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const footer = document.getElementById('main-footer');
      let isFooterVisible = false;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          isFooterVisible = true;
        }
      }

      if (window.scrollY > 300 && !isFooterVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
    >
      {/* White Rectangle Container only on mobile */}
      <div className="lg:hidden w-full bg-white shadow-lg flex justify-center items-center gap-4 p-4 md:p-6 pointer-events-auto relative rounded-t-xl">
        <div className="flex items-center gap-3 md:gap-4 justify-center w-full">
          <a
            href="https://wa.me/923412120752"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 md:px-8 md:py-3 rounded-full font-bold transition-all duration-300 justify-center
                       text-white text-sm md:text-base
                       bg-gradient-to-r from-[#32de84] via-[#25D366] to-[#1caf4d]
                       hover:from-[#3eea9d] hover:to-[#20bd5a]
                       shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            <MessageCircle size={20} className="fill-current" />
            WhatsApp
          </a>

          <a
            href="tel:+03412120752"
            className="flex items-center gap-2 px-5 py-3 md:px-8 md:py-3 rounded-full font-bold transition-all duration-300 justify-center
                       text-white text-sm md:text-base
                       bg-gradient-to-r from-[#b33b92] via-[#9C1D78] to-[#7f1460]
                       hover:from-[#c156a3] hover:to-[#831864]
                       shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            <Phone size={20} className="fill-current" />
            Call Now
          </a>
        </div>
      </div>

      {/* Desktop & larger screens: floating buttons without rectangle */}
      <div className="hidden lg:flex justify-center items-center gap-4 pointer-events-auto relative">
        <a
          href="https://wa.me/923412120752"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 md:px-8 md:py-3 rounded-full font-bold transition-all duration-300 justify-center
                     text-white text-sm md:text-base
                     bg-gradient-to-r from-[#32de84] via-[#25D366] to-[#1caf4d]
                     hover:from-[#3eea9d] hover:to-[#20bd5a]
                     shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
        >
          <MessageCircle size={20} className="fill-current" />
          WhatsApp
        </a>

        <a
          href="tel:+03412120752"
          className="flex items-center gap-2 px-5 py-3 md:px-8 md:py-3 rounded-full font-bold transition-all duration-300 justify-center
                     text-white text-sm md:text-base
                     bg-gradient-to-r from-[#b33b92] via-[#9C1D78] to-[#7f1460]
                     hover:from-[#c156a3] hover:to-[#831864]
                     shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
        >
          <Phone size={20} className="fill-current" />
          Call Now
        </a>
      </div>

    </div>
  );
};

export default FloatingActions;
