import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-lg mb-4 overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-gray-800 text-base md:text-lg font-normal group-hover:text-gray-900 transition-colors">
          {question}
        </span>
        <span className={`text-gray-400 transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus size={24} strokeWidth={1.5} />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-6 transition-all duration-500 ease-in-out bg-white overflow-hidden"
      >
        <div className="pb-6 pt-0 text-gray-500 leading-relaxed font-light">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const questions = [
    {
      question: "What is the duration & frequency of Counselling sessions?",
      answer: "Sessions typically last between 50 to 60 minutes. The frequency depends on individual needs, but usually, sessions are held once a week to ensure consistent progress."
    },
    {
      question: "How much do Counselling sessions cost?",
      answer: "The cost varies depending on the type of session (individual vs. group) and the package chosen. Please contact us directly for detailed pricing structures."
    },
    {
      question: "What are the highlights of Workshops/Training?",
      answer: "Our workshops are interactive, practical, and tailored to the specific needs of the group. They include role-playing, case studies, and actionable takeaways."
    },
    {
      question: "What is included in Mindfulness-based sessions?",
      answer: "These sessions include guided meditations, breathing exercises, and cognitive techniques to help manage stress and improve focus."
    },
    {
      question: "Is online therapy as effective as in-person therapy?",
      answer: "Research has consistently shown that online therapy can be just as effective as in-person therapy for a wide range of mental health issues, offering convenience and comfort."
    },
    {
      question: "How do I know if I need therapy?",
      answer: "If you're feeling overwhelmed, stuck, or finding it difficult to manage daily life, therapy can be beneficial. It's a supportive space to explore feelings and develop coping strategies."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, confidentiality is a core principle of therapy. Your personal information and session details are kept strictly private, adhering to ethical and legal standards."
    }
  ];

  const visibleQuestions = showAll ? questions : questions.slice(0, 5);

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Decorative Line (Top Separator) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[300px] object-cover -translate-y-[40%]"
          preserveAspectRatio="none"
        >
          <path 
            d="M-46 168.5C305 60.5 596 295.5 941 247.5C1286 199.5 1493 84.5 1583 60.5" 
            stroke="#FCD34D" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary-black)]">
            Have a question?
          </h2>
        </div>

        <div className="space-y-2">
          {visibleQuestions.map((q, index) => (
            <FAQItem key={index} {...q} />
          ))}
        </div>

        {!showAll && questions.length > 5 && (
           <div className="text-center mt-8">
             <button 
               onClick={() => setShowAll(true)}
               className="text-gray-500 hover:text-gray-800 font-medium text-sm transition-colors"
             >
               View all questions
             </button>
           </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;