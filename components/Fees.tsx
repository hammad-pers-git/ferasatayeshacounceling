import React from 'react';
import { User, Users, Brain, Check, Clock, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const PricingCard = ({
  title,
  price,
  duration,
  icon,
  features,
  isPopular,
}: any) => (
  <div
    className={`relative flex flex-col p-7 rounded-[2rem] border bg-white h-full transition-all ${isPopular
        ? 'border-[#FCD34D] shadow-xl'
        : 'border-gray-200 shadow-md'
      }`}
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
      <div className="text-right text-xs text-gray-400 font-semibold">
        <div className="flex items-center justify-end gap-1">
          <Clock size={12} /> {duration}
        </div>
        Standard Rate
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

    <div className="mb-6">
      <span className="text-3xl font-bold">{price}</span>
      <span className="ml-1 text-sm text-gray-400 uppercase">pkr</span>
    </div>

    <ul className="space-y-3 text-sm text-gray-500 flex-grow">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex gap-3">
          <Check size={16} className="text-[#FCD34D]" />
          {f}
        </li>
      ))}
    </ul>

    <button
      onClick={() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={`mt-6 w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isPopular
          ? 'bg-[#FCD34D] text-gray-900 hover:bg-black hover:text-white'
          : 'bg-gray-900 text-white hover:bg-black'
        }`}
    >
      Get Started
      <ChevronRight size={16} />
    </button>

  </div>
);

const Fees = () => {
  return (
    <section id="fees" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="block text-sm uppercase tracking-widest text-gray-400">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Session Fees
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            className="pb-0" // remove default padding for pagination inside
          >
            {[{
              title: "Individual Therapy",
              price: "12,000",
              duration: "50 mins",
              icon: <User size={26} />,
              features: [
                'One-on-one focused attention',
                'Personalized therapy plan',
                'CBT based methods',
                'Secure online sessions',
              ],
            }, {
              isPopular: true,
              title: "Couples Session",
              price: "15,000",
              duration: "75 mins",
              icon: <Users size={26} />,
              features: [
                'Gottman Method approach',
                'Extended session',
                'Conflict resolution tools',
                'Trust rebuilding exercises',
              ],
            }, {
              title: "Teen Support",
              price: "10,000",
              duration: "50 mins",
              icon: <Brain size={26} />,
              features: [
                'Ages 13–19 care',
                'Pressure & identity support',
                'Parent consultation',
                'Safe digital space',
              ],
            }].map((plan, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-300 ${window.innerWidth < 1024
                        ? isActive
                          ? 'scale-100 opacity-100'
                          : 'scale-95 opacity-50'
                        : ''
                      }`}
                  >
                    <PricingCard {...plan} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination outside the cards */}
          <div className="swiper-pagination !mt-6 flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
