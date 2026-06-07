import React from 'react';
import { useInView } from '../hooks';
import { PROPERTIES, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../constants';
import { WhatsAppIcon, MapPinIcon } from './Icons';

const imageGradients = {
  apartment: 'from-navy-700 to-navy-900',
  'premium-flat': 'from-gold-600/20 to-navy-800',
  plot: 'from-green-800 to-green-950',
  commercial: 'from-navy-600 to-charcoal-900',
};

const imageIcons = {
  apartment: (
    <svg className="w-16 h-16 text-white/10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
    </svg>
  ),
  'premium-flat': (
    <svg className="w-16 h-16 text-white/10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L4 9v12h16V9l-8-6zm4 15h-3v-3H11v3H8v-8l4-3 4 3v8zm-5-5h2v2h-2v-2z" />
    </svg>
  ),
  plot: (
    <svg className="w-16 h-16 text-white/10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  commercial: (
    <svg className="w-16 h-16 text-white/10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
  ),
};

function PropertyCard({ property, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const gradient = imageGradients[property.image] || imageGradients.apartment;
  const icon = imageIcons[property.image] || imageIcons.apartment;

  const whatsappMessage = WHATSAPP_MESSAGES.property(property.type, property.location);
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl premium-shadow hover:premium-shadow-hover hover:transform hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Placeholder */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        {icon}
        <span className="absolute top-3 right-3 bg-gold-400 text-navy-900 text-xs font-semibold px-3 py-1 rounded-full">
          {property.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-navy-900 mb-1">
          {property.type}
        </h3>

        <div className="flex items-center gap-1 text-sm text-charcoal-500 mb-3">
          <MapPinIcon className="w-4 h-4 flex-shrink-0" />
          <span>{property.location}</span>
        </div>

        <p className="text-xl font-bold text-navy-800 mb-3">
          {property.price}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.map((feature, i) => (
            <span
              key={i}
              className="bg-navy-50 text-navy-700 text-xs px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-medium transition-colors duration-200"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Enquire on WhatsApp</span>
        </a>
        <p className="text-xs text-charcoal-400 text-center mt-2">
          Ask for photos &amp; site visit
        </p>
      </div>
    </div>
  );
}

function FeaturedProperties() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section id="properties" className="bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Featured Property Options
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mb-4" />
          <p className="text-charcoal-500 max-w-2xl mx-auto">
            Sample listings shown for demo. Real properties can be added with photos, prices, and location details.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTIES.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
