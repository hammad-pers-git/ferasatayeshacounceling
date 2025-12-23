
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <footer id="main-footer" className="bg-[#1C1E23] py-10 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400 text-sm">

        {/* Company Info */}
        <div className="flex flex-col space-y-3">
          <h5 className="text-white font-serif font-bold text-lg uppercase tracking-wide">Ayesha Akmal</h5>
          <div className="flex items-center gap-3 mt-2">
            <Mail size={16} className="text-stone-500" />
            <span className="text-gray-300">contact@ayeshaakmal.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-stone-500" />
            <span className="text-gray-300">+92 341 2120752</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-white font-semibold mb-2">Quick Links</h6>
          <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#fees" className="hover:text-yellow-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-white font-semibold mb-2">Legal</h6>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onTermsClick?.();
            }}
            className="text-left hover:text-white transition-colors"
          >
            Terms & Conditions
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onPrivacyClick?.();
            }}
            className="hover:text-yellow-400 transition-colors text-left"
          >
            Privacy Policy
          </button>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-white font-semibold mb-2">Follow Us</h6>
          <div className="flex gap-4 mt-1">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-gray-600 text-center md:text-left">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
