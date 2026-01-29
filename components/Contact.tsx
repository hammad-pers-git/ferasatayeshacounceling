import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, User, PhoneCall } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const SERVICE_ID = 'service_oqejhpc';
    const USER_ID = 'wbT681sW_zuuQx93B';

    // 1️⃣ Send Contact Us email to you
    emailjs.sendForm(SERVICE_ID, 'template_9pbg3ri', formRef.current, USER_ID)
      .then(() => {
        // 2️⃣ Send Auto-Reply email to user
        emailjs.sendForm(SERVICE_ID, 'template_mfwdmk7', formRef.current, USER_ID)
          .catch(() => {
            setSuccessMessage('Contact message sent, but auto-reply failed.');
          });

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
    <motion.section
      id="contact"
      className="py-12 md:py-16 bg-[var(--white)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.span
            className="text-[var(--primary-black)] font-bold text-sm tracking-widest uppercase mb-2 block opacity-70"
            variants={itemVariants}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[var(--primary-black)]"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
        </motion.div>

        {/* Main Contact Card */}
        <div className="bg-[var(--primary-color-tint-99)] rounded-2xl flex flex-col md:flex-row border border-[var(--primary-color-tint-90)]">
          {/* Left Side: Illustration Area */}
          <div className="w-full md:w-5/12 bg-[var(--primary-color-tint-80)] relative flex items-center justify-center p-6 md:p-10 overflow-hidden min-h-[250px] md:min-h-[300px]">
            <div className="absolute w-72 h-72 rounded-full border-[30px] border-[var(--white)] opacity-20 scale-125"></div>
            <div className="absolute w-64 h-64 bg-[var(--primary-color)] rounded-full opacity-10 blur-3xl"></div>
            <div className="relative z-10 w-40 h-40 md:w-52 md:h-52 bg-[var(--primary-color-tint-90)] rounded-full flex items-center justify-center ring-8 ring-[var(--white)]/30">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full flex items-center justify-center overflow-hidden border-4 border-[var(--primary-black)] bg-[var(--secondary-color-one-70)] relative">
                <img
                  src="/pictures/contactillustration.png"
                  alt="Contact Us"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col justify-center bg-[#FFFBEB]">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-black)] mb-6 md:mb-8 font-serif tracking-tight text-center md:text-left">
              Get matched with a therapist
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Mobile number (Whatsapp)</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)]">
                  <div className="bg-[var(--grey-6)] px-4 py-2 text-[var(--grey)] font-medium border-r border-[var(--grey-4)] flex items-center gap-2 min-w-[80px] md:min-w-[100px]">
                    <PhoneCall size={18} className="text-[var(--grey)]" />
                    <span>+92</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="XXXXXXX"
                    className="flex-grow px-4 py-2 outline-none text-[var(--primary-black)] placeholder-[var(--grey-4)] bg-[var(--white)] w-full"
                    required
                  />
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Name</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)]">
                  <div className="pl-4 py-2 text-[var(--grey-4)] flex items-center bg-[var(--white)]">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="flex-grow px-4 py-2 outline-none text-[var(--primary-black)] placeholder-[var(--grey-4)] bg-[var(--white)] w-full"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Email (Gmail / Others)</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)]">
                  <div className="pl-4 py-2 text-[var(--grey-4)] flex items-center bg-[var(--white)]">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="flex-grow px-4 py-2 outline-none text-[var(--primary-black)] placeholder-[var(--grey-4)] bg-[var(--white)] w-full"
                    required
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Select Service</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)]">
                  <select
                    name="service"
                    className="flex-grow px-4 py-2 outline-none text-[var(--primary-black)] bg-[var(--white)] w-full"
                    required
                  >
                    <option value="">Choose a service</option>
                    <option value="Therapy Session">Therapy Session</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--primary-color)] text-[var(--primary-black)] font-bold py-3 rounded-xl hover:bg-[var(--primary-color-80)] mt-6 text-lg"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>

              {successMessage && (
                <p className="text-center text-sm text-green-600 mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
        {/* Traditional Contact Info Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t border-[var(--grey-6)] pt-12 max-w-2xl mx-auto">
          {/* Business Hours */}
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors">
              <Clock size={24} /> </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Business Hours</h4>
            <p className="text-[var(--grey)] text-sm">Mon - Sat: 9am - 7pm</p> </div>
          {/* Call Us */}
          <a href="tel:+923175632023" className="flex flex-col items-center text-center group cursor-pointer" >
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors"> <Phone size={24} /> </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Call Us</h4>
            <p className="text-[var(--grey)] text-sm hover:text-[var(--primary-black)]">+92 317 5632023</p> </a>
          {/* Email */}
          <a href="mailto:ferasat.ayesha77@gmail.com" className="flex flex-col items-center text-center group cursor-pointer" >
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors"> <Mail size={24} /> </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Email</h4>
            <p className="text-[var(--grey)] text-sm hover:text-[var(--primary-black)]">ferasat.ayesha77@gmail.com</p> </a>
        </div>
      </div>
    </motion.section>);
};

export default Contact;