import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  onOpenAbout?: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenAbout }) => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-[var(--white)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image with Badge */}
          <motion.div
            className="relative group cursor-pointer bg-white"
            onClick={onOpenAbout}
            variants={imageVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] w-full transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="https://picsum.photos/600/800?grayscale&random=5"
                alt="Manisha Varma"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-[var(--primary-black)] px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Read Full Bio
                </span>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              className="absolute -bottom-6 right-8 bg-[var(--white)] px-6 py-4 rounded-xl shadow-xl flex flex-col items-center justify-center border border-[var(--grey-6)] pointer-events-none"
              variants={itemVariants}
            >
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="var(--primary-color)" stroke="var(--primary-color)" />
                ))}
              </div>
              <span className="text-[var(--primary-black)] font-bold text-sm">5+ Years Experience</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={containerVariants}>
            <motion.span
              className="text-[var(--primary-black)] font-bold text-sm tracking-widest uppercase mb-2 block opacity-70"
              variants={itemVariants}
            >
              About Me
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[var(--primary-black)] mb-6"
              variants={itemVariants}
            >
              Empowering Lives Through Empathy
            </motion.h2>
            <motion.div 
              // className="w-16 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color-two)] rounded-full mx-auto mb-6"
              variants={itemVariants}
            />
            <motion.p
              className="text-[var(--grey)] mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I am Ferasat Ayesha, a qualified Psychologist with over 5 years of experience providing psychological support to adults, couples, and teenagers. I hold an MS in Clinical Psychology along with a PMDCP Diploma, and I work with individuals facing emotional, behavioral, and relationship-related challenges.
            </motion.p>
            <motion.p
              className="text-[var(--grey)] mb-8 leading-relaxed"
              variants={itemVariants}
            >
              My areas of expertise include mood disorders, depression, anxiety, stress management, and relationship conflicts. I follow a structured, empathetic, and client-centered approach, helping individuals develop healthier coping strategies and gain emotional clarity.            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              variants={itemVariants}
            >
              {['Senior Psychologist', 'Corporate Trainer', 'Life Coach'].map((role) => (
                <span key={role} className="bg-[var(--primary-color-tint-95)] text-[var(--primary-black)] px-4 py-2 rounded-lg text-sm font-medium border border-[var(--primary-color-tint-90)]">
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.button
              onClick={onOpenAbout}
              className="text-[var(--primary-black)] font-bold text-sm border-b-2 border-[var(--primary-color)] pb-1 hover:text-[var(--primary-color-80)] transition-colors flex items-center gap-1 group"
              variants={itemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              READ MORE ABOUT ME
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;