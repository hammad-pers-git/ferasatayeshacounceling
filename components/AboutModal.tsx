import React from 'react';
import { X, Star, Award, BookOpen } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#FFFCF5] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
        
        {/* Close Button - Adjusted for better visibility on mobile */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 text-white md:text-[var(--primary-black)] bg-black/30 md:bg-transparent hover:bg-black/40 p-2 rounded-full transition-colors z-20 backdrop-blur-md md:backdrop-blur-none"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>

        <div className="overflow-y-auto flex flex-col md:flex-row h-full">
            {/* Left/Top Image Section - Reduced height for mobile */}
            <div className="w-full md:w-5/12 bg-[var(--primary-color-tint-95)] relative h-80 md:h-auto md:min-h-full shrink-0">
                <img 
                    src="https://picsum.photos/600/800?grayscale&random=5" 
                    alt="Manisha Varma" 
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)]/90 via-transparent to-transparent md:bg-gradient-to-t md:from-[var(--primary-black)]/80 md:to-transparent flex flex-col justify-end p-5 md:p-10">
                    <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-0.5 md:mb-1">Ayesha Akmal</h3>
                    <p className="text-[var(--primary-color)] text-xs md:text-sm font-bold uppercase tracking-wider">Senior Psychologist</p>
                </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-7/12 p-6 md:p-12 bg-white overflow-y-auto">
                <span className="text-[var(--primary-color-80)] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-3 block">
                  Full Biography
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-[var(--primary-black)] mb-4 md:mb-6 font-serif leading-tight">
                  A Journey of Empathy <br/> & Healing
                </h2>

                <div className="space-y-4 md:space-y-6 text-[var(--grey)] leading-relaxed text-sm md:text-lg font-light">
                    <p>
                        With over two decades of experience in the field of psychology, I have dedicated my life to helping individuals find their inner strength. My journey began with a simple curiosity about human behavior and has evolved into a passionate vocation to facilitate mental wellness.
                    </p>
                    <p>
                        I specialize in Cognitive Behavioral Therapy (CBT), Mindfulness-Based Stress Reduction (MBSR), and trauma-informed care. My approach is holistic, viewing the mind, body, and spirit as interconnected parts of a whole.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8 py-2 md:py-4">
                        <div className="bg-[var(--primary-color-tint-98)] p-4 md:p-5 rounded-xl border border-[var(--primary-color-tint-90)] flex md:block items-center gap-4 md:gap-0">
                            <div className="shrink-0">
                                <Award className="text-[var(--primary-color-80)] mb-0 md:mb-3" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--primary-black)] text-sm md:text-base">Certified Expert</h4>
                                <p className="text-xs md:text-sm mt-0.5 md:mt-1 text-[var(--grey)]">Licensed Clinical Psychologist with global certifications.</p>
                            </div>
                        </div>
                        <div className="bg-[var(--secondary-color-one-96)] p-4 md:p-5 rounded-xl border border-[var(--secondary-color-one-70)]/30 flex md:block items-center gap-4 md:gap-0">
                            <div className="shrink-0">
                                <BookOpen className="text-[var(--success-color)] mb-0 md:mb-3" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--primary-black)] text-sm md:text-base">Published Author</h4>
                                <p className="text-xs md:text-sm mt-0.5 md:mt-1 text-[var(--grey)]">Contributor to leading mental health journals.</p>
                            </div>
                        </div>
                    </div>
                    
                    <p>
                        Whether you are navigating a difficult life transition, coping with anxiety, or simply seeking personal growth, I am here to walk alongside you.
                    </p>
                </div>

                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[var(--grey-6)] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={18} fill="#FFD670" stroke="#FFD670" />
                        ))}
                    </div>
                    <span className="text-xs md:text-sm font-bold text-[var(--primary-black)] uppercase tracking-wide">
                        Trusted by 500+ Clients
                    </span>
                    <button 
                        onClick={onClose}
                        className="bg-[var(--primary-black)] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm hover:bg-[var(--grey)] transition-colors w-full sm:w-auto"
                    >
                        Close Bio
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;