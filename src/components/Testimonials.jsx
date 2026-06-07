import React from 'react';
import { useInView } from '../hooks';
import { TESTIMONIALS } from '../constants';
import { QuoteIcon, StarIcon } from './Icons';

function TestimonialCard({ review, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  // Get initials for avatar
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 md:p-8 border border-navy-100/30 premium-shadow hover:premium-shadow-hover hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Top Section: Stars & Quote */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-gold-400" />
            ))}
          </div>
          <QuoteIcon className="w-8 h-8 text-gold-400/20" />
        </div>

        {/* Text */}
        <p className="text-charcoal-600 text-sm md:text-base leading-relaxed italic mb-6">
          "{review.text}"
        </p>
      </div>

      {/* Author Info */}
      <div>
        <hr className="border-navy-50 mb-4" />
        <div className="flex items-center gap-3">
          {/* Avatar Placeholder */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-navy-800 to-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center border border-navy-700/20">
            {initials}
          </div>
          <div>
            <h4 className="font-semibold text-navy-900 text-sm md:text-base leading-tight">
              {review.name}
            </h4>
            <p className="text-xs text-charcoal-400 mt-0.5">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-3 block">
            Customer Success
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
