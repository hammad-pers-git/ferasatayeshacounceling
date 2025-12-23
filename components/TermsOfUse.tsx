
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-[#FFF0CC] py-10 md:py-17 text-center border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold text-xs uppercase tracking-widest mb-12 transition-all group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Terms of Use</h1>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        
        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Introduction</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed text-base md:text-lg">
            <p>
              Welcome to Ayesha Akmal Counseling! These Terms of Use ("Terms") govern your access to and use of our website, mobile applications, and all related services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Platform.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our services</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              <span className="font-bold text-gray-900">Service description:</span> Ayesha Akmal Counseling is an online platform providing online counseling and talk therapy services through its team of qualified mental health professionals ("Therapists"). We offer a variety of services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Individual counseling: One-on-one sessions with a licensed therapist.</li>
              <li>Couples counseling: Sessions for couples addressing relationship issues.</li>
              <li>Workshops: Group sessions focused on specific mental wellness topics.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">User account</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              <span className="font-bold text-gray-900">Account creation:</span> To access certain features of the Platform, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Therapist qualifications</h2>
          <p className="text-stone-600 leading-relaxed">
            In order to provide the highest quality of services, Ayesha Akmal Counseling ensures that all our therapists are certified mental health professionals with relevant experience and licensure in their respective jurisdictions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Therapy Session scheduling and cancellation</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold text-gray-900">Scheduling:</span> Therapy sessions can be scheduled through the Platform based on therapist availability.
              </li>
              <li>
                <span className="font-bold text-gray-900">Refund and Cancellation Policy:</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-3">
                  <li>
                    <span className="font-bold text-gray-900">Full refund:</span> Upon canceling your therapy session 48 hours prior, you can choose between two options. You can either have the credit immediately available in your account for future bookings or opt for a refund. If you choose a refund, it will be processed within 10 business days, with a 7.5% deduction for bank transaction charges.
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">Partial refund:</span> If you cancel your session between 24 and 48 hours before your appointment, you will receive a 50% refund.
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">No Refund:</span> Unfortunately, we cannot offer a refund if you cancel your session less than 24 hours before your appointment.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Fees and payments</h2>
          <p className="text-stone-600 leading-relaxed">
            Fees for therapy sessions are outlined on the Platform. Payment is required in advance and can be made through the designated payment methods provided during the booking process.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Confidentiality and Privacy</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold text-gray-900">Privacy policy:</span> We prioritize the privacy and confidentiality of your information. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal data.
              </li>
              <li>
                <span className="font-bold text-gray-900">Data privacy and security:</span> Ayesha Akmal Counseling is committed to protecting your personal information. We implement robust security measures to prevent unauthorized access or disclosure.
              </li>
            </ul>
          </div>
        </section>

        <section className="pt-10 border-t border-stone-100">
           <p className="text-stone-400 text-sm italic">
             For any further clarification on our Terms of Use, please reach out to us at 
             <a href="mailto:legal@ayeshaakmal.com" className="underline ml-1">legal@ayeshaakmal.com</a>.
           </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfUse;
