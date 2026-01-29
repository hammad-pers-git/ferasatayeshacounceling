import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactV2: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const SERVICE_ID = 'service_oqejhpc';
    const USER_ID = 'wbT681sW_zuuQx93B';

    try {
      await emailjs.sendForm(SERVICE_ID, 'template_9pbg3ri', formRef.current, USER_ID);
      
      try {
        await emailjs.sendForm(SERVICE_ID, 'template_mfwdmk7', formRef.current, USER_ID);
      } catch (error) {
        console.log('Auto-reply failed, but main message sent');
      }

      setSuccessMessage('Thank you! We\'ve received your message and will contact you soon.');
      formRef.current.reset();

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);

    } catch (error) {
      setSuccessMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

        .contact-v2-section {
          padding: 3rem 1rem;
          background: linear-gradient(135deg, #FFFBF5 0%, #FFF8E5 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .contact-v2-bg-decoration {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        .contact-v2-bg-decoration::before,
        .contact-v2-bg-decoration::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #FFE299, transparent);
        }

        .contact-v2-bg-decoration::before {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -200px;
          animation: contact-v2-float 25s ease-in-out infinite;
        }

        .contact-v2-bg-decoration::after {
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          animation: contact-v2-float 20s ease-in-out infinite reverse;
        }

        @keyframes contact-v2-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        @keyframes contact-v2-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contact-v2-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes contact-v2-scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .contact-v2-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
          position: relative;
          z-index: 1;
        }

        .contact-v2-header {
          text-align: center;
          margin-bottom: 3.75rem;
          animation: contact-v2-fadeInUp 0.8s ease-out;
        }

        .contact-v2-subtitle {
          font-size: 0.8125rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--grey);
          font-weight: 700;
          margin-bottom: 0.75rem;
          opacity: 0;
          animation: contact-v2-fadeIn 0.8s ease-out 0.2s forwards;
        }

        .contact-v2-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--primary-black);
          margin-bottom: 1rem;
          line-height: 1.2;
          opacity: 0;
          animation: contact-v2-fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .contact-v2-tagline {
          font-size: 1.125rem;
          color: var(--grey);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0;
          animation: contact-v2-fadeIn 0.8s ease-out 0.5s forwards;
        }

        .contact-v2-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 214, 112, 0.3);
          animation: contact-v2-scaleIn 0.8s ease-out 0.6s backwards;
        }

        .contact-v2-card-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          min-height: 600px;
        }

        .contact-v2-info-section {
          background: linear-gradient(135deg, #FFF0CC 0%, #F4FAF0 100%);
          padding: 3.125rem 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .contact-v2-info-section::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--primary-color);
          border-radius: 50%;
          top: -150px;
          right: -150px;
          opacity: 0.15;
        }

        .contact-v2-info-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-v2-info-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-black);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .contact-v2-info-description {
          color: var(--grey);
          line-height: 1.7;
          font-size: 0.9375rem;
        }

        .contact-v2-info-list {
          list-style: none;
          margin-top: 1.875rem;
        }

        .contact-v2-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(36, 38, 45, 0.08);
          transition: all 0.3s ease;
        }

        .contact-v2-info-item:hover {
          transform: translateX(5px);
        }

        .contact-v2-info-item:last-child {
          border-bottom: none;
        }

        .contact-v2-icon-wrapper {
          width: 44px;
          height: 44px;
          background: var(--white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .contact-v2-info-item:hover .contact-v2-icon-wrapper {
          background: var(--primary-color);
          transform: rotate(5deg) scale(1.05);
        }

        .contact-v2-info-text {
          flex: 1;
        }

        .contact-v2-info-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--grey);
          margin-bottom: 0.25rem;
          font-weight: 700;
        }

        .contact-v2-info-value {
          color: var(--primary-black);
          font-size: 0.9375rem;
          font-weight: 500;
          line-height: 1.5;
        }

        .contact-v2-info-value a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-v2-info-value a:hover {
          color: var(--primary-color-80);
        }

        .contact-v2-form-section {
          padding: 3.125rem 2.8125rem;
          background: var(--white);
        }

        .contact-v2-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-black);
          margin-bottom: 0.625rem;
        }

        .contact-v2-form-subtitle {
          color: var(--grey);
          margin-bottom: 2.1875rem;
          font-size: 0.9375rem;
        }

        .contact-v2-form-group {
          margin-bottom: 1.5rem;
        }

        .contact-v2-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--primary-black);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .contact-v2-input,
        .contact-v2-select,
        .contact-v2-textarea {
          width: 100%;
          padding: 0.875rem 1.125rem;
          border: 2px solid var(--grey-6);
          border-radius: 12px;
          font-family: 'Lato', sans-serif;
          font-size: 0.9375rem;
          color: var(--primary-black);
          background: var(--white);
          transition: all 0.3s ease;
          outline: none;
        }

        .contact-v2-input:focus,
        .contact-v2-select:focus,
        .contact-v2-textarea:focus {
          border-color: var(--primary-color-80);
          box-shadow: 0 0 0 4px rgba(255, 214, 112, 0.15);
          transform: translateY(-1px);
        }

        .contact-v2-input::placeholder,
        .contact-v2-textarea::placeholder {
          color: var(--grey-4);
        }

        .contact-v2-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-v2-phone-input {
          display: flex;
          gap: 0;
        }

        .contact-v2-phone-prefix {
          background: var(--grey-6);
          border: 2px solid var(--grey-6);
          border-right: none;
          border-radius: 12px 0 0 12px;
          padding: 0.875rem 1rem;
          font-weight: 600;
          color: var(--primary-black);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 90px;
        }

        .contact-v2-phone-input .contact-v2-input {
          border-radius: 0 12px 12px 0;
          flex: 1;
        }

        .contact-v2-submit-btn {
          width: 100%;
          padding: 1rem 1.5rem;
          background: var(--primary-color);
          color: var(--primary-black);
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.625rem;
          box-shadow: 0 4px 16px rgba(255, 214, 112, 0.3);
          position: relative;
          overflow: hidden;
        }

        .contact-v2-submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .contact-v2-submit-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .contact-v2-submit-btn:hover {
          background: var(--primary-color-80);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 214, 112, 0.4);
        }

        .contact-v2-submit-btn:active {
          transform: translateY(0);
        }

        .contact-v2-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-v2-submit-btn span {
          position: relative;
          z-index: 1;
        }

        .contact-v2-success-message {
          background: var(--success-light);
          color: var(--success-color);
          padding: 0.875rem 1.25rem;
          border-radius: 12px;
          margin-top: 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          animation: contact-v2-fadeIn 0.3s ease-out;
          border: 1px solid var(--success-color);
        }

        @media (max-width: 968px) {
          .contact-v2-card-grid {
            grid-template-columns: 1fr;
          }

          .contact-v2-info-section {
            padding: 2.5rem 1.875rem;
            min-height: auto;
          }

          .contact-v2-form-section {
            padding: 2.5rem 1.875rem;
          }

          .contact-v2-title {
            font-size: 2.625rem;
          }
        }

        @media (max-width: 640px) {
          .contact-v2-container {
            padding: 1.875rem 1rem;
          }

          .contact-v2-header {
            margin-bottom: 2.5rem;
          }

          .contact-v2-title {
            font-size: 2.25rem;
          }

          .contact-v2-tagline {
            font-size: 1rem;
          }

          .contact-v2-info-title {
            font-size: 1.625rem;
          }

          .contact-v2-form-title {
            font-size: 1.5rem;
          }

          .contact-v2-phone-input {
            flex-direction: column;
          }

          .contact-v2-phone-prefix {
            border-right: 2px solid var(--grey-6);
            border-radius: 12px 12px 0 0;
            min-width: auto;
          }

          .contact-v2-phone-input .contact-v2-input {
            border-radius: 0 0 12px 12px;
          }
        }
      `}</style>

      <section className="contact-v2-section">
        <div className="contact-v2-bg-decoration" />
        
        <div className="contact-v2-container">
          <header className="contact-v2-header">
            <div className="contact-v2-subtitle">Let's Connect</div>
            <h1 className="contact-v2-title">Get in Touch</h1>
            <p className="contact-v2-tagline">
              Take the first step towards wellness. We're here to support your journey with compassionate, professional care.
            </p>
          </header>

          <div className="contact-v2-card">
            <div className="contact-v2-card-grid">
              {/* Info Section */}
              <div className="contact-v2-info-section">
                <div className="contact-v2-info-content">
                  <div>
                    <h2 className="contact-v2-info-title">Your Path to Wellness Starts Here</h2>
                    <p className="contact-v2-info-description">
                      Reach out to schedule a consultation or learn more about our counseling services. We're committed to providing you with personalized support.
                    </p>
                  </div>

                  <ul className="contact-v2-info-list">
                    <li className="contact-v2-info-item">
                      <div className="contact-v2-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <div className="contact-v2-info-text">
                        <div className="contact-v2-info-label">Call Us</div>
                        <div className="contact-v2-info-value">
                          <a href="tel:+923175632023">+92 317 5632023</a>
                        </div>
                      </div>
                    </li>

                    <li className="contact-v2-info-item">
                      <div className="contact-v2-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div className="contact-v2-info-text">
                        <div className="contact-v2-info-label">Email</div>
                        <div className="contact-v2-info-value">
                          <a href="mailto:ferasat.ayesha77@gmail.com">ferasat.ayesha77@gmail.com</a>
                        </div>
                      </div>
                    </li>

                    <li className="contact-v2-info-item">
                      <div className="contact-v2-icon-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </div>
                      <div className="contact-v2-info-text">
                        <div className="contact-v2-info-label">Office Hours</div>
                        <div className="contact-v2-info-value">Mon - Sat: 9:00 AM - 7:00 PM</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form Section */}
              <div className="contact-v2-form-section">
                <h2 className="contact-v2-form-title">Schedule a Session</h2>
                <p className="contact-v2-form-subtitle">Fill out the form below and we'll get back to you shortly.</p>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="contact-v2-form-group">
                    <label htmlFor="name" className="contact-v2-label">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="contact-v2-input"
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>

                  <div className="contact-v2-form-group">
                    <label htmlFor="phone" className="contact-v2-label">WhatsApp Number</label>
                    <div className="contact-v2-phone-input">
                      <div className="contact-v2-phone-prefix">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        +92
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="contact-v2-input"
                        placeholder="3XX XXXXXXX" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="contact-v2-form-group">
                    <label htmlFor="email" className="contact-v2-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="contact-v2-input"
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>

                  <div className="contact-v2-form-group">
                    <label htmlFor="service" className="contact-v2-label">Service Needed</label>
                    <select 
                      id="service" 
                      name="service" 
                      className="contact-v2-select"
                      required
                    >
                      <option value="">Choose a service</option>
                      <option value="Therapy Session">Therapy Session</option>
                      <option value="Consultation">Initial Consultation</option>
                      <option value="Follow-up">Follow-up Appointment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="contact-v2-form-group">
                    <label htmlFor="message" className="contact-v2-label">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="contact-v2-textarea"
                      placeholder="Tell us a bit about what brings you here..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="contact-v2-submit-btn"
                    disabled={loading}
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  {successMessage && (
                    <div className="contact-v2-success-message">
                      {successMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactV2;