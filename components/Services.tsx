import React, { useState, useRef } from 'react';
import { ClipboardList, Users, Calendar, Heart, X, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const GetStarted: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage('');
  };

  const steps: Step[] = [
    { id: 1, title: "Take 1 minute assessment", icon: <ClipboardList strokeWidth={1.5} /> },
    { id: 2, title: "Get matched with a therapist", icon: <Users strokeWidth={1.5} /> },
    { id: 3, title: "Book your first session", icon: <Calendar strokeWidth={1.5} /> },
    { id: 4, title: "Begin therapy and feel better", icon: <Heart strokeWidth={1.5} /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const SERVICE_ID = 'service_oqejhpc';
    const TEMPLATE_ID_ADMIN = 'template_9pbg3ri';
    const TEMPLATE_ID_USER = 'template_mfwdmk7';
    const USER_ID = 'wbT681sW_zuuQx93B';

    // 1️⃣ Send form to admin
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_ADMIN, formRef.current, USER_ID)
      .then(() => {
        // 2️⃣ Send auto-reply to user using the same form
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_USER, formRef.current, USER_ID)
          .catch(() => {
            setSuccessMessage('Form sent, but confirmation email failed.');
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
    <section className="py-8 md:py-12 bg-white overflow-hidden relative">
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

        <div className="hidden lg:grid grid-cols-4 gap-6 mb-6 relative z-10">
          {steps.map(step => (
            <div key={step.id} className="flex flex-col h-full">
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
              <div key={step.id} className="relative flex items-center gap-4 z-10">
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
          <button onClick={openModal} className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-normal rounded-lg text-base transition-colors shadow-sm w-full lg:w-auto text-center cursor-pointer">
            Get started
          </button>
          <button onClick={openModal} className="px-6 py-2.5 bg-white border border-yellow-400 hover:bg-yellow-50 text-gray-900 font-normal rounded-lg text-base transition-colors w-full lg:w-auto text-center cursor-pointer">
            Unsure? Talk to a specialist
          </button>
        </div>

        {/* Modal Form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={closeModal}
              aria-hidden="true"
            />

            <div className="relative w-full max-w-md md:max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-gray-800"
              >
                <X size={24} />
              </button>

              {/* Left Illustration */}
              <div className="hidden md:flex w-5/12 bg-[#FDE68A] flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
                <div className="absolute w-[120%] h-[120%] bg-white/20 rounded-full blur-3xl -top-10 -left-10"></div>
                <div className="relative z-10 w-full max-w-xs transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="pictures/contactillustration.png"
                    alt="Contact Illustration"
                    className="w-full h-auto object-contain drop-shadow-sm mix-blend-multiply opacity-90"
                  />
                </div>
              </div>

              {/* Right Form */}
              <div className="w-full md:w-7/12 bg-[#FFFBF2] relative p-6 md:p-8 flex flex-col justify-center">
                <div className="relative z-10 max-w-md w-full mx-auto md:mx-0">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                    Get matched with a therapist
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    Start your therapy journey towards a happier, healthier you.
                  </p>

                  <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                    {/* WhatsApp */}
                    <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                      <div className="text-gray-400 pl-1"><Phone size={20} strokeWidth={1.5} /></div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 font-medium mb-0.5">Mobile number (Whatsapp)</label>
                        <div className="flex items-center gap-2">
                          <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded tracking-wide">+92</span>
                          <input type="tel" name="phone" placeholder="XXXXXXX" className="w-full outline-none text-gray-600 placeholder-gray-300 font-medium text-sm md:text-base bg-transparent" required />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                      <div className="text-gray-400 pl-1"><Users size={20} strokeWidth={1.5} /></div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 font-medium mb-0.5">Email</label>
                        <input type="email" name="email" placeholder="you@example.com" className="w-full outline-none text-gray-600 placeholder-gray-300 font-medium text-sm md:text-base bg-transparent" required />
                      </div>
                    </div>

                    {/* Name */}
                    <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                      <div className="text-gray-400 pl-1"><Users size={20} strokeWidth={1.5} /></div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 font-medium mb-0.5">Name</label>
                        <input type="text" name="name" placeholder="Your name" className="w-full outline-none text-gray-600 placeholder-gray-300 font-medium text-sm md:text-base bg-transparent" required />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-[#FCD34D] hover:bg-[#FBBF24] text-gray-900 font-semibold py-3 rounded-xl shadow-sm transition-colors mt-4 text-base md:text-lg">
                      {loading ? 'Sending...' : 'Submit'}
                    </button>
                    {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
                  </form>
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
