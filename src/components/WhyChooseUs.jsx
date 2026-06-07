import React from 'react';
import { useInView } from '../hooks';
import { WHY_CHOOSE_US } from '../constants';
import { CheckIcon } from './Icons';

function TrustCard({ item, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 premium-shadow border-t-2 border-gold-400 hover:premium-shadow-hover transition-all duration-300 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Check Icon */}
      <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center mb-4">
        <CheckIcon className="w-5 h-5 text-gold-400" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-navy-900 mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-charcoal-500 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function WhyChooseUs() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section id="why-us" className="bg-gradient-to-b from-white to-gray-50 section-padding">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Buyers Trust PrimeNest Realty
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto" />
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <TrustCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
