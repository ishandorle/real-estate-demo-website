import React from 'react';
import { useInView } from '../hooks';
import { getWhatsAppUrl, getCallUrl, WHATSAPP_MESSAGES } from '../constants';
import { WhatsAppIcon, PhoneIcon } from './Icons';

function SiteVisitCTA() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.siteVisit);
  const callUrl = getCallUrl();

  return (
    <section className="relative bg-navy-900 section-padding overflow-hidden text-white">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-navy-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-max relative z-10 text-center" ref={ref}>
        <div
          className={`max-w-3xl mx-auto flex flex-col items-center ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Accent Mini Title */}
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
            Seamless Coordinator Support
          </span>

          {/* H2 Title */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Visit a Property?
          </h2>

          {/* Description */}
          <p className="text-navy-200 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl font-light">
            Shortlist your preferred property and connect with us to schedule a site visit. We arrange transport, guide you on-site, and resolve all your doubts instantly.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-500/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Book Site Visit on WhatsApp</span>
            </a>

            <a
              href={callUrl}
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Small Trust Note */}
          <p className="text-xs text-navy-300 mt-4 font-light">
            No booking charges • Safe &amp; verified properties only
          </p>
        </div>
      </div>
    </section>
  );
}

export default SiteVisitCTA;
