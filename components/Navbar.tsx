import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sprout, User, Phone, PhoneCall } from 'lucide-react';
import emailjs from '@emailjs/browser';

type NavbarProps = {
  onHomeClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
        


        {/* Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}
      </nav>

      {/* Get Started Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={toggleModal} />

          <div className="relative w-full max-w-md md:max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 md:max-h-[500px] md:overflow-y-auto">

            <button onClick={toggleModal} className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-gray-800">
              <X size={24} />
            </button>

            {/* Left Illustration */}
            <div className="hidden md:flex w-5/12 bg-[#FDE68A] flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
              <div className="absolute w-[120%] h-[120%] bg-white/20 rounded-full blur-3xl -top-10 -left-10"></div>
              <img src="pictures/contactillustration.png" alt="Contact Illustration" className="relative z-10 w-full max-w-xs object-contain opacity-90" />
            </div>

            {/* Right Form */}
            <div className="w-full md:w-7/12 bg-[#FFFBF2] relative p-6 md:p-6 flex flex-col justify-center">
              <div className="relative z-10 max-w-md w-full mx-auto md:mx-0">
                <h2 className="text-2xl md:text-xl font-serif font-bold text-gray-900 mb-3">
                  Get matched with a therapist
                </h2>
                <p className="text-gray-600 mb-4 text-sm md:text-xs">
                  Start your therapy journey towards a happier, healthier you.
                </p>

                <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-1 text-sm md:text-xs">Name</label>
                    <input type="text" name="name" required className="p-3 md:p-2 rounded-xl border border-gray-200 outline-none text-sm md:text-xs focus:ring-1 focus:ring-amber-300" placeholder="Your Name" />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-1 text-sm md:text-xs">Email</label>
                    <input type="email" name="email" required className="p-3 md:p-2 rounded-xl border border-gray-200 outline-none text-sm md:text-xs focus:ring-1 focus:ring-amber-300" placeholder="you@example.com" />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-1 text-sm md:text-xs">Mobile Number (Whatsapp)</label>
                    <input type="tel" name="phone" required className="p-3 md:p-2 rounded-xl border border-gray-200 outline-none text-sm md:text-xs focus:ring-1 focus:ring-amber-300" placeholder="XXXXXXXXX" />
                  </div>

                  {/* Service Dropdown */}
                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-1 text-sm md:text-xs">Select Service</label>
                    <select name="service" required className="p-3 md:p-2 rounded-xl border border-gray-200 outline-none text-sm md:text-xs focus:ring-1 focus:ring-amber-300">
                      <option value="">Choose a service</option>
                      <option value="Therapy Session">Therapy Session</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Follow-up">Follow-up</option>
                    </select>
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-[#FCD34D] hover:bg-[#FBBF24] text-gray-900 font-semibold py-3 md:py-2 rounded-xl shadow-sm transition-colors text-sm md:text-xs">
                    {loading ? 'Sending...' : 'Submit'}
                  </button>

                  {successMessage && <p className="text-center text-sm md:text-xs text-green-600 mt-1">{successMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
