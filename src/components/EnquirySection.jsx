import React, { useState } from 'react';
import { useInView } from '../hooks';
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from '../constants';
import { WhatsAppIcon, RupeeIcon, MapPinIcon, HomeIcon } from './Icons';

function EnquirySection() {
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const handleSubmit = () => {
    const message = WHATSAPP_MESSAGES.requirement(budget, location, propertyType);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputCards = [
    {
      icon: <RupeeIcon className="w-6 h-6 text-gold-400" />,
      label: 'Budget',
      placeholder: 'e.g. ₹20-50 Lakhs',
      value: budget,
      onChange: setBudget,
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-gold-400" />,
      label: 'Preferred Location',
      placeholder: 'e.g. Satara City',
      value: location,
      onChange: setLocation,
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-gold-400" />,
      label: 'Property Type',
      placeholder: 'e.g. 2BHK Flat',
      value: propertyType,
      onChange: setPropertyType,
    },
  ];

  return (
    <section className="relative bg-navy-900 section-padding overflow-hidden">
      {/* Decorative Gold Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(229, 175, 62, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(229, 175, 62, 0.04) 0%, transparent 50%)',
        }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Property Fits Your Budget?
          </h2>
          <p className="text-navy-200 max-w-2xl mx-auto text-lg">
            Tell us your budget, preferred area, and property type. We will suggest suitable options and arrange a site visit.
          </p>
        </div>

        {/* Input Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          {inputCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 md:p-6 transition-all duration-300 hover:bg-white/15"
            >
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <label className="text-white/80 text-sm font-medium">
                  {card.label}
                </label>
              </div>
              <input
                type="text"
                value={card.value}
                onChange={(e) => card.onChange(e.target.value)}
                placeholder={card.placeholder}
                className="bg-transparent border-b border-white/30 text-white placeholder-white/40 focus:border-gold-400 outline-none w-full text-lg py-2 transition-colors duration-200"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '400ms' }}
        >
          <button
            onClick={handleSubmit}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 hover:transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Send Requirement on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default EnquirySection;
