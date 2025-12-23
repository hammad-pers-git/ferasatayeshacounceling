
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          <h1 className="text-5xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Privacy policy</h1>
          <p className="text-stone-500 text-sm md:text-base font-medium">
            Updated and effective as of September 26, 2024
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <p className="text-lg leading-relaxed text-stone-600">
          This privacy policy outlines how we collect, use, share, and protect your personal information when you engage with our services.
        </p>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Overview</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>Ayesha Akmal Counseling ('we', 'us', 'our') is committed to ensuring your privacy. This policy applies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our website: <a href="#" className="underline hover:text-[var(--primary-color)] transition-colors">ayeshaakmal.com</a></li>
              <li>Any services we provide, including online therapy and counseling.</li>
            </ul>
            <p>If you have any questions about this policy, please contact us at <a href="mailto:privacy@ayeshaakmal.com" className="underline hover:text-[var(--primary-color)] transition-colors">privacy@ayeshaakmal.com</a>.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Key terms</h2>
          <ul className="space-y-4 text-stone-600">
            <li><span className="font-bold text-gray-900">Cookies:</span> Small data files stored on your device to enhance your experience on our website.</li>
            <li><span className="font-bold text-gray-900">Personal Data:</span> Information that can identify you as an individual, directly or indirectly.</li>
            <li><span className="font-bold text-gray-900">Services:</span> The online therapy and counseling services offered by Ayesha Akmal Counseling.</li>
            <li><span className="font-bold text-gray-900">Third Parties:</span> External entities, including advertisers and service providers, that may have access to your information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Information we collect</h2>
          <div className="space-y-4 text-stone-600">
            <p>We may collect the following types of information when you interact with our Services:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold text-gray-900">Personal information:</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Name / Username</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing information</li>
                  <li>Payment details</li>
                </ul>
              </li>
              <li><span className="font-bold text-gray-900">Usage data:</span> Information about how you use our website and services.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Sources of information</h2>
          <p className="text-stone-600 leading-relaxed">
            We may obtain information directly from you or through third-party sources, such as marketing partners and fraud detection services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Sharing your information</h2>
          <div className="space-y-4 text-stone-600">
            <p>Your information may be used for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and improving our Services.</li>
              <li>Communicating with you about your account and our services.</li>
              <li>Sending marketing communications (with your consent).</li>
              <li>Analyzing usage trends to enhance user experience.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Email communication</h2>
          <p className="text-stone-600 leading-relaxed">
            By providing your email address, you agree to receive communications from us. You can opt-out at any time by following the unsubscribe instructions in our emails.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Data security</h2>
          <p className="text-stone-600 leading-relaxed">
            We employ various security measures to protect your information, but no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Access and control of your information</h2>
          <div className="space-y-4 text-stone-600">
            <p>You have the right to request:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your personal data.</li>
              <li>Correction of any inaccurate information.</li>
              <li>Deletion of your personal data, subject to certain legal obligations.</li>
            </ul>
            <p>To make such requests, please contact us at <a href="mailto:privacy@ayeshaakmal.com" className="underline hover:text-[var(--primary-color)] transition-colors">privacy@ayeshaakmal.com</a>.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Retention of your information</h2>
          <p className="text-stone-600 leading-relaxed">
            We retain your information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Once it is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Children's privacy</h2>
          <p className="text-stone-600 leading-relaxed">
            Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal data from children. If you believe we have collected information from a child, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Changes to this privacy policy</h2>
          <p className="text-stone-600 leading-relaxed">
            We may update this policy periodically. Any changes will be posted on our website with an updated effective date. We encourage you to review this policy regularly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Governing law</h2>
          <p className="text-stone-600 leading-relaxed">
            Our website may contain links to other websites not operated by us. We are not responsible for the content or practices of those sites. Please review their privacy policies before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Contact us</h2>
          <p className="text-stone-600 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please reach out to us at <a href="mailto:privacy@ayeshaakmal.com" className="underline hover:text-[var(--primary-color)] transition-colors">privacy@ayeshaakmal.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
