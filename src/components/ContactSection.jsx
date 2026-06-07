import React from 'react';
import { useInView } from '../hooks';
import { GOOGLE_MAPS_URL, getWhatsAppUrl, getCallUrl, WHATSAPP_MESSAGES } from '../constants';
import { MapPinIcon, PhoneIcon, ClockIcon, WhatsAppIcon, ExternalLinkIcon } from './Icons';

function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const callUrl = getCallUrl();

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-navy-800" />,
      title: 'Office Address',
      detail: 'Main Road, Satara, Maharashtra',
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-navy-800" />,
      title: 'Phone Number',
      detail: '+91 98765 43210',
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-navy-800" />,
      title: 'Opening Hours',
      detail: '10:00 AM – 8:00 PM (Every Day)',
    },
  ];

  return (
    <section id="contact" className="bg-white section-padding border-t border-navy-100/30">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-3 block">
            Location &amp; Inquiries
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Column */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between ${
              isInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            {/* Info Items List */}
            <div className="flex flex-col gap-6 mb-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Icon wrap */}
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm md:text-base mb-1">
                      {info.title}
                    </h4>
                    <p className="text-charcoal-600 text-sm">
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct CTA Buttons block */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-green-900/10"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={callUrl}
                className="flex items-center justify-center gap-2.5 bg-navy-800 hover:bg-navy-900 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-navy-900/10"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 border border-navy-700 hover:bg-navy-50 text-navy-800 font-bold py-3.5 rounded-xl transition-all"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div
            className={`lg:col-span-7 min-h-[300px] lg:min-h-full ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            {/* Map visual placeholder */}
            <div className="w-full h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 p-[1px] relative overflow-hidden shadow-xl">
              <div className="w-full h-full bg-navy-950 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center p-6 border border-white/5">
                {/* Decorative map illustration elements */}
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(229,175,62,0.1) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }} />
                
                {/* Visual Pin */}
                <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4 relative z-10 animate-bounce">
                  <MapPinIcon className="w-8 h-8 text-gold-400" />
                </div>
                
                <h4 className="font-semibold text-white mb-2 relative z-10">Office Location Map</h4>
                <p className="text-navy-300 text-sm max-w-sm mb-6 relative z-10 font-light">
                  Click below to open interactive directions on Google Maps to reach our Satara main office.
                </p>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-400 hover:bg-gold-500 text-navy-950 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 relative z-10 shadow-lg shadow-gold-500/10"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>Navigate Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
