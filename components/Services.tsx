import React, { useState, useRef, useEffect } from 'react';
import { ClipboardList, Users, Calendar, Heart, X, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const GetStarted: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]); // For scroll animation
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsDrawerOpen(false);
      setActiveStep(1);
      setSuccessMessage('');
      document.body.style.overflow = 'unset';
    }, 500);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    }
  }, [isDrawerOpen]);

  const steps: Step[] = [
    { id: 1, title: "Take 1 minute assessment", icon: <ClipboardList strokeWidth={1.5} /> },
    { id: 2, title: "Get matched with a therapist", icon: <Users strokeWidth={1.5} /> },
    { id: 3, title: "Book your first session", icon: <Calendar strokeWidth={1.5} /> },
    { id: 4, title: "Begin therapy and feel better", icon: <Heart strokeWidth={1.5} /> },
  ];

  // Scroll animation for steps
  useEffect(() => {
    const stepsElems = document.querySelectorAll('.step-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute('data-step'));
            if (!visibleSteps.includes(stepId)) {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, stepId]);
              }, stepId * 200); // staggered delay
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    stepsElems.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSteps]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const SERVICE_ID = 'service_oqejhpc';
    const TEMPLATE_ID_ADMIN = 'template_9pbg3ri';
    const TEMPLATE_ID_USER = 'template_mfwdmk7';
    const USER_ID = 'wbT681sW_zuuQx93B';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_ADMIN, formRef.current, USER_ID)
      .then(() => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_USER, formRef.current, USER_ID)
          .catch(() => setSuccessMessage('Form sent, but confirmation email failed.'));
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
    <section ref={sectionRef} className="py-8 md:py-12 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-2">
            It’s easy to get started
          </h2>
          <p className="hidden md:block text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Start your wellness journey in 4 simple steps.
          </p>
        </div>

        {/* Desktop Steps */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-6 relative z-10">
          {steps.map(step => (
            <div
              key={step.id}
              data-step={step.id}
              className={`step-item flex flex-col h-full transition-all duration-700 ease-out ${visibleSteps.includes(step.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="bg-[#FFFBF2] rounded-xl p-4 h-[140px] flex flex-col items-center justify-center text-center border border-transparent hover:border-yellow-100 group">
                <div className="flex flex-col items-center gap-1 mb-1">
                  <span className="font-serif text-4xl text-[#FDE68A] leading-none select-none">{step.id}</span>
                  <div className="mt-1 text-gray-800">
                    {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-900 font-medium leading-snug">{step.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative mt-0 mb-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex justify-center items-center">
              <div className="w-3 h-3 bg-[#FCD34D] rounded-full z-10 relative shadow-sm" />
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 left-1/2 w-[calc(100%+1.5rem)] h-0.5 bg-gray-300 -z-0 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden max-w-md mx-auto relative pl-2">
          <div className="absolute left-[26px] top-6 bottom-6 w-px border-l-2 border-dashed border-gray-300/70 -z-0" />
          <div className="flex flex-col gap-5">
            {steps.map(step => (
              <div
                key={step.id}
                data-step={step.id}
                className={`step-item relative flex items-center gap-4 z-10 transition-all duration-700 ease-out ${visibleSteps.includes(step.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border shadow-sm
                    ${step.id === 1 ? 'bg-[#FDE68A] border-[#FDE68A]' : 'bg-white border-gray-100'}`}>
                  {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, {
                    className: `w-5 h-5 ${step.id === 1 ? 'text-gray-900' : 'text-gray-800'}`
                  })}
                </div>
                <p className="text-base text-gray-900 font-normal">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6 justify-center max-w-md mx-auto lg:max-w-none lg:flex-row">
          <button onClick={openDrawer} className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-normal rounded-lg text-base transition-colors shadow-sm w-full lg:w-auto text-center cursor-pointer">
            Get started
          </button>
          <button onClick={openDrawer} className="px-6 py-2.5 bg-white border border-yellow-400 hover:bg-yellow-50 text-gray-900 font-normal rounded-lg text-base transition-colors w-full lg:w-auto text-center cursor-pointer">
            Unsure? Talk to a specialist
          </button>
        </div>

        {/* FULL PAGE DRAWER */}
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[100] flex items-end">
            <div
              className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
              onClick={closeDrawer}
            />

            <div
              className={`relative w-full h-[95vh] bg-white rounded-t-[2.5rem] shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}
            >
              <div className="w-full flex justify-center pt-4 pb-2">
                <div className="w-12 h-1.5 bg-slate-200 rounded-full cursor-pointer" onClick={closeDrawer} />
              </div>

              <button
                onClick={closeDrawer}
                className="absolute top-6 right-6 z-50 p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto">
                <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row">
                  {/* Left Info */}
                  <div className="hidden lg:flex w-5/12 bg-yellow-50 p-12 flex-col justify-between border-r border-slate-100">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                          Let's find your <br /><span className="text-yellow-600">perfect match</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                          Our algorithm takes into account your history, personality, and specific needs to find a therapist you'll click with.
                        </p>
                      </div>

                      <div className="space-y-6">
                        {steps.map((step) => (
                          <div key={step.id} className="flex gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeStep === step.id ? 'bg-yellow-400 text-slate-900' : 'bg-white text-slate-400 border border-slate-200'}`}>
                              {step.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">{step.title}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Form Area */}
                  <div className="flex-1 p-8 md:p-16 lg:p-20 flex items-center justify-center">
                    <div className="max-w-md w-full">
                      {successMessage === '' ? (
                        <>
                          <div className={`mb-10 text-center lg:text-left transition-all duration-1000 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="text-3xl font-bold text-slate-900 mb-3">Matching Details</h3>
                            <p className="text-slate-500">Please provide your contact information to begin the matching process.</p>
                          </div>

                          <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 transition-all duration-1000 delay-100 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                              <div className="group transition-all">
                                <input
                                  name="name" type="text" required placeholder="Type your name..."
                                  className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent group-hover:bg-slate-100 focus:bg-white focus:border-yellow-400 rounded-2xl outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                              <div className="group">
                                <input
                                  name="email" type="email" required placeholder="name@example.com"
                                  className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent group-hover:bg-slate-100 focus:bg-white focus:border-yellow-400 rounded-2xl outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp Number</label>
                              <div className="flex gap-3">
                                <div className="px-5 py-4 bg-slate-100 border-2 border-transparent rounded-2xl text-slate-600 font-bold flex items-center justify-center text-sm shadow-sm select-none">
                                  +92
                                </div>
                                <div className="flex-1 group">
                                  <input
                                    name="phone" type="tel" required placeholder="3XX XXXXXXX"
                                    className="w-full h-full px-6 py-4 bg-slate-50 border-2 border-transparent group-hover:bg-slate-100 focus:bg-white focus:border-yellow-400 rounded-2xl outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                  />
                                </div>
                              </div>
                            </div>

                            <button
                              disabled={loading}
                              type="submit"
                              className="w-full relative px-8 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden group active:scale-[0.98]"
                            >
                              {loading ? (
                                <Loader2 className="w-6 h-6 animate-spin text-yellow-400" />
                              ) : (
                                <>
                                  <span className="text-lg">Get Matched Now</span>
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-yellow-400" />
                                </>
                              )}
                            </button>

                            <p className="text-center text-[11px] text-slate-400 px-6">
                              Secure connection. Your information is protected by our <span className="underline cursor-pointer hover:text-slate-600">Confidentiality Policy</span>.
                            </p>
                          </form>
                        </>
                      ) : (
                        <div className="text-center space-y-8 py-10 animate-in fade-in zoom-in-90 duration-700 ease-out">
                          <div className="w-28 h-28 bg-green-100 rounded-[2.5rem] flex items-center justify-center mx-auto text-green-600 shadow-inner rotate-3 hover:rotate-0 transition-transform duration-500">
                            <CheckCircle2 size={56} strokeWidth={2} />
                          </div>
                          <div className="space-y-4">
                            <h2 className="text-4xl font-serif font-bold text-slate-900">Application Sent!</h2>
                            <p className="text-slate-600 text-lg max-w-sm mx-auto">
                              We've started matching you with our specialists. You'll receive a WhatsApp message within 24 hours to schedule your session.
                            </p>
                          </div>
                          <button
                            onClick={closeDrawer}
                            className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all hover:shadow-2xl active:scale-95 shadow-xl"
                          >
                            Return to Home
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetStarted;
