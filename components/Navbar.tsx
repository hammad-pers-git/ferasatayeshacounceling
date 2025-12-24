import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

type NavbarProps = {
  onHomeClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);       // Mobile nav
  const [isModalOpen, setIsModalOpen] = useState(false); // Full-page drawer
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(false); // Added for drawer animation

  const formRef = useRef<HTMLFormElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#fees' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate drawer when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => setIsAnimating(true), 50); // small delay for transition
    } else {
      setIsAnimating(false);
    }
  }, [isModalOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onHomeClick(); // Notify App to set view 'main'
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsOpen(false);
    setSuccessMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const SERVICE_ID = 'service_oqejhpc';
    const USER_ID = 'wbT681sW_zuuQx93B';

    emailjs.sendForm(SERVICE_ID, 'template_9pbg3ri', formRef.current, USER_ID)
      .then(() => {
        emailjs.sendForm(SERVICE_ID, 'template_mfwdmk7', formRef.current, USER_ID)
          .catch(() => setSuccessMessage('Message sent, but auto-reply failed.'));
        setSuccessMessage('Thank you! Your information has been sent.');
        formRef.current?.reset();
        setLoading(false);
      })
      .catch(() => {
        setSuccessMessage('Oops! Something went wrong. Please try again.');
        setLoading(false);
      });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-[var(--white)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-28 md:h-32">
            {/* Mobile Hamburger */}
            <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
              <button onClick={() => setIsOpen(true)} className="text-[var(--primary-black)] hover:text-[var(--primary-color-80)] p-2">
                <Menu size={28} />
              </button>
            </div>

            {/* Mobile Get Started */}
            <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
              <button onClick={toggleModal} className="bg-white border-2 border-[#FCD34D] text-black px-3 py-1.5 rounded-lg hover:bg-yellow-50 transition-colors font-medium text-xs sm:text-sm">
                Get Started
              </button>
            </div>

            {/* Logo + Branding */}
            <div className="flex justify-center md:justify-start items-center w-full md:w-auto mx-auto md:mx-0 gap-4">
              <a href="#home" onClick={handleLogoClick} className="group block relative py-2 shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F9F7F2] rounded-full border border-[#1E4620] flex flex-col items-center justify-center relative shadow-sm group-hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-1 rounded-full border border-[#1E4620] opacity-20"></div>
                  <div className="flex flex-col items-center text-[#1E4620] leading-none z-10 pt-1">
                    <span className="font-serif text-[15px] md:text-[17px] tracking-tight">Ayesha</span>
                    <span className="font-serif text-[15px] md:text-[17px] -mt-0.5 tracking-tight">Akmal</span>
                    <span className="text-[6px] md:text-[7px] uppercase tracking-[0.15em] mt-1 font-sans opacity-90">Counseling</span>
                    <Sprout size={12} className="mt-0.5 text-[#1E4620]" strokeWidth={2} />
                  </div>
                </div>
              </a>
              <a href="#home" onClick={handleLogoClick} className="hidden md:flex items-center group text-left">
                <span className="text-[#1E4620] font-serif font-bold text-xl tracking-wide group-hover:opacity-80 transition-opacity">
                  Ayeshaakmalcounseling
                </span>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 items-center ml-auto">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-black hover:text-[var(--primary-color-80)] px-3 py-1.5 text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Get Started */}
            <div className="hidden md:flex items-center ml-6">
              <button onClick={toggleModal} className="bg-white border-2 border-[#FCD34D] text-black px-6 py-2.5 rounded-lg hover:bg-yellow-50 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`fixed inset-x-0 bottom-0 h-3/4 max-h-[80%] bg-gray-800 text-white shadow-xl transform transition-transform duration-500 z-50 
  ${isOpen ? 'translate-y-0' : 'translate-y-full'} rounded-t-2xl`}>
          <div className="flex flex-col h-full px-6 py-8 relative">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>

            {/* Logo inside Drawer */}
            <div className="flex items-center justify-center mb-6 mt-2">
              <div className="w-20 h-20 bg-[#F9F7F2] rounded-full border border-[#1E4620] flex flex-col items-center justify-center relative">
                <div className="absolute inset-1 rounded-full border border-[#1E4620] opacity-20"></div>
                <div className="flex flex-col items-center text-[#1E4620] leading-none z-10 pt-1">
                  <span className="font-serif text-[15px] tracking-tight">Ayesha</span>
                  <span className="font-serif text-[15px] -mt-0.5 tracking-tight">Akmal</span>
                  <span className="text-[6px] uppercase tracking-[0.15em] mt-1 font-sans opacity-90">Counseling</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 mb-6"></div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="hover:text-yellow-400 text-lg font-normal transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Get Started Button */}
            <button onClick={toggleModal} className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-normal mb-6">
              Get Started
            </button>

            {/* Contact Info at Bottom */}
            <div className="mt-auto border-t border-gray-600 pt-4 mb-20">
              <h4 className="text-white text-lg mb-2 font-bold">Contact</h4>
              <p className="text-white text-sm mb-1">Email: contact@ayeshaakmal.com</p>
              <p className="text-white text-sm">Phone: +92 341 2120752</p>
            </div>
          </div>
        </div>

        {/* Overlay for Mobile Drawer */}
        {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}
      </nav>

      {/* FULL PAGE DRAWER FROM NAVBAR GET STARTED */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end">
          <div
            className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsModalOpen(false)}
          />

          <div
            className={`relative w-full h-[95vh] bg-white rounded-t-[2.5rem] shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <div className="w-full flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full cursor-pointer" onClick={() => setIsModalOpen(false)} />
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex-1 overflow-y-auto flex items-center justify-center">
              <div className="max-w-md w-full p-8 md:p-16">
                {successMessage === '' ? (
                  <>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3 text-center">Matching Details</h3>
                    <p className="text-slate-500 text-center mb-6">Please provide your contact information to begin the matching process.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <input name="name" type="text" placeholder="Full Name" required className="w-full px-6 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:bg-white bg-slate-50 outline-none text-slate-900" />
                      <input name="email" type="email" placeholder="Email" required className="w-full px-6 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:bg-white bg-slate-50 outline-none text-slate-900" />
                      <div className="flex gap-3">
                        <div className="px-5 py-4 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 font-bold">+92</div>
                        <input name="phone" type="tel" placeholder="3XX XXXXXXX" required className="flex-1 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:bg-white bg-slate-50 outline-none text-slate-900" />
                      </div>
                      <button type="submit" disabled={loading} className="w-full px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3">
                        {loading ? <Loader2 className="w-6 h-6 animate-spin text-yellow-400" /> : <>Get Matched Now <ArrowRight className="w-5 h-5 text-yellow-400" /></>}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-8 py-10">
                    <div className="w-28 h-28 bg-green-100 rounded-[2.5rem] flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle2 size={56} strokeWidth={2} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-slate-900">Application Sent!</h2>
                    <p className="text-slate-600 text-lg">You'll receive a WhatsApp message within 24 hours to schedule your session.</p>
                    <button onClick={() => setIsModalOpen(false)} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl">Return to Home</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
