import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#1C1E23] py-10 border-t border-[var(--primary-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-[var(--grey-4)] text-sm">

        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-[var(--white)] font-bold text-lg uppercase tracking-wide">Ayesha Akmal</h5>
          <p>© 2024 All rights reserved.</p>
          <div className="flex items-center gap-3 mt-2">
            <Mail size={16} className="text-[var(--white)]" />
            <span>Ayeshaakmal@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[var(--white)]" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-[var(--white)] font-semibold mb-2">Quick Links</h6>
          <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-[var(--white)] font-semibold mb-2">Legal</h6>
          <a href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-[var(--white)] font-semibold mb-2">Follow Us</h6>
          <div className="flex gap-3 mt-1">
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
