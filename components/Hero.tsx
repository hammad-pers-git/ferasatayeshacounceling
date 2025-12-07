import React from 'react';
import { ChevronRight } from 'lucide-react';

type CardType = 'individual' | 'couple' | 'teen';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView(); 
    }
  };


  const cards: { 
    id: CardType; 
    title: string; 
    subtitleDesktop: string; 
    subtitleMobile: string; 
    bg: string; 
    border: string; 
    img?: string; 
    imgWife?: string; 
    imgHusband?: string; 
    imgAlt: string; 
  }[] = [
    {
      id: 'individual',
      title: 'For Individuals',
      subtitleDesktop: 'For 18+',
      subtitleMobile: 'For 18+',
      bg: 'bg-[var(--primary-color-68)]',
      border: 'border-[var(--primary-color)]/20',
      img: 'pictures/avatar1.svg',
      imgAlt: 'Individual Therapy',
    },
    {
      id: 'couple',
      title: 'For Couples',
      subtitleDesktop: 'Partner & I',
      subtitleMobile: 'For my partner and I',
      bg: 'bg-[var(--secondary-color-one)]',
      border: 'border-[var(--secondary-color-one-70)]/20',
      imgWife: 'pictures/avatar2.svg',
      imgHusband: 'pictures/avatar3.svg',
      imgAlt: 'Couples Therapy',
    },
    {
      id: 'teen',
      title: 'For Teens',
      subtitleDesktop: 'Ages 13 - 17',
      subtitleMobile: 'For ages 13 - 17',
      bg: 'bg-[var(--secondary-color-two)]',
      border: 'border-[var(--secondary-color-two-40)]/20',
      img: 'pictures/avatar4.svg',
      imgAlt: 'Teen Therapy',
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--white)] pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h1 className="text-[var(--primary-black)] font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-serif tracking-tight leading-tight">
            Online therapy <br className="md:hidden" /> that works.
          </h1>
          <h2 className="text-[var(--primary-black)] text-lg md:text-2xl font-medium mb-8 md:mb-12 max-w-xl mx-auto leading-normal font-serif">
            The best psychologists in Dubai <br className="hidden md:block" /> are here for you.
          </h2>
          <p className="text-[var(--primary-black)] text-base md:text-lg opacity-80 font-sans">
            What kind of online therapy <br className="md:hidden" /> are you looking for?
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={scrollToContact} 
              className={`${card.bg} rounded-xl p-3 md:p-5 flex flex-row md:flex-col items-center ${card.border} shadow-sm h-20 md:h-[280px] group cursor-pointer`}
            >
              <div className="bg-[var(--white)] rounded-lg shrink-0 w-20 h-100 md:w-full md:h-[150px] flex items-center justify-center overflow-hidden relative mr-4 md:mr-0 md:mb-6 px-4">
                {card.id === 'couple' ? (
                  <div className="flex items-end justify-center -space-x-4 w-full h-full pb-2">
                    <img src={card.imgWife} alt="Wife" className="w-12 h-12 md:w-36 md:h-36 object-contain z-10" />
                    <img src={card.imgHusband} alt="Husband" className="w-12 h-12 md:w-36 md:h-36 object-contain" />
                  </div>
                ) : (
                  <img src={card.img} alt={card.imgAlt} className="w-16 h-16 md:w-48 md:h-48 object-contain translate-y-2" />
                )}
              </div>

              <div className="flex-grow md:px-2 flex flex-col justify-center w-full relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-3">
                  <h3 className="font-serif font-medium md:font-bold text-base md:text-xl text-[var(--primary-black)] whitespace-nowrap">{card.title}</h3>
                  <span className="hidden md:inline-flex items-center justify-center text-[10px] uppercase font-bold bg-[var(--white)]/60 px-2 py-1 rounded text-[var(--grey)] border border-[var(--primary-black)]/10">{card.subtitleDesktop}</span>
                  <span className="md:hidden text-xs text-[var(--grey)] mt-1">{card.subtitleMobile}</span>
                </div>
                <ChevronRight className="absolute right-0 md:hidden text-[var(--primary-black)] opacity-60" size={20} />
                <div className="hidden md:flex items-center justify-center text-[var(--primary-black)] font-medium text-sm gap-2 mt-6">
                  Get Started
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-10 md:mt-16">
          <p className="text-[var(--primary-black)] text-base md:text-lg">
            Not sure? <a href="#contact" className="underline font-medium hover:text-[var(--primary-color-80)]">Talk to a specialist.</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
