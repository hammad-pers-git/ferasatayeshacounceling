
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

        .footer-section {
          padding: 3rem 1rem;
          background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
          position: relative;
          overflow: hidden;
        }

        .footer-bg-decoration {
          position: fixed;
          width: 100%;
          height: 100%;
          bottom: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
        }

        .footer-bg-decoration::before,
        .footer-bg-decoration::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 214, 112, 0.5), transparent);
        }

        .footer-bg-decoration::before {
          width: 600px;
          height: 600px;
          bottom: -200px;
          right: -200px;
          animation: footer-float 25s ease-in-out infinite;
        }

        .footer-bg-decoration::after {
          width: 400px;
          height: 400px;
          top: -100px;
          left: -100px;
          animation: footer-float 20s ease-in-out infinite reverse;
        }

        @keyframes footer-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
          position: relative;
          z-index: 1;
        }

        .footer-content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section-title {
          font-family: 'Lato', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-link {
          color: #a0a0a0;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #FFD670;
          transform: translateX(4px);
        }

        .footer-divider {
          border-top: 1px solid rgba(255, 214, 112, 0.1);
          margin-top: 2rem;
          padding-top: 2rem;
          text-align: center;
          color: #a0a0a0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .footer-section {
            padding: 2rem 1rem;
          }

          .footer-container {
            padding: 2rem 1rem;
          }

          .footer-content-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <footer id="main-footer" className="footer-section">
        <div className="footer-bg-decoration"></div>
        <div className="footer-container">
          <div className="footer-content-grid">
            {/* Company Info */}
            <div className="flex flex-col space-y-3">
              <h1 className="footer-section-title">Ferasat Ayesha</h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                I am Ferasat Ayesha, a qualified Psychologist with over 5 years of experience providing psychological support to adults, couples, and teenagers. I hold an MS in Clinical Psychology along with a PMDCP Diploma, and I work with individuals facing emotional, behavioral, and relationship-related challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-3">
              <h6 className="footer-section-title">Quick Links</h6>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#fees" className="footer-link">Pricing</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-3">
              <h6 className="footer-section-title">Legal</h6>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onTermsClick?.();
                }}
                className="footer-link text-left"
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onPrivacyClick?.();
                }}
                className="footer-link text-left"
              >
                Privacy Policy
              </button>
            </div>

            {/* Social Media */}
            <div className="flex flex-col space-y-3">
              <h6 className="footer-section-title">Follow Us</h6>
              <div className="flex gap-4 mt-1">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                <a href="https://www.instagram.com/ferasatayesha_mughal?igsh=MXN1NXRrNHd2bmt5YQ==" className="text-gray-400 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
              </div>
              <br /><br />
              <div className="flex items-center gap-3 mt-4">
                <Mail size={16} className="text-stone-500" />
                <span className="text-gray-300 text-sm">ferasat.ayesha77@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-stone-500" />
                <span className="text-gray-300 text-sm">+92 317 5632023</span>
              </div>
            </div>
          </div>

          <div className="footer-divider">
            <p>© {new Date().getFullYear()} All rights reserved. Ferasat Ayesha Counseling.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
