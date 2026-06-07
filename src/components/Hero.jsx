import React from 'react';
import { useInView, scrollToSection } from '../hooks';
import { getWhatsAppUrl, getCallUrl, WHATSAPP_MESSAGES } from '../constants';
import { WhatsAppIcon, PhoneIcon, HomeIcon, MapPinIcon, CheckIcon } from './Icons';

// Simple SVG building path for decorative right card
function HouseIllustration() {
  return (
    <svg className="w-full h-full text-white/5 p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Sky line / background grids */}
      <line x1="0" y1="90" x2="100" y2="90" strokeWidth="2" stroke="rgba(229,175,62,0.4)" />
      
      {/* Sun/circle */}
      <circle cx="80" cy="30" r="10" stroke="rgba(229,175,62,0.2)" strokeWidth="0.5" fill="rgba(229,175,62,0.03)" />
      
      {/* Main modern high-rise building */}
      <rect x="15" y="15" width="25" height="75" rx="2" stroke="currentColor" />
      {/* Windows */}
      <line x1="22" y1="25" x2="25" y2="25" />
      <line x1="30" y1="25" x2="33" y2="25" />
      <line x1="22" y1="35" x2="25" y2="35" />
      <line x1="30" y1="35" x2="33" y2="35" />
      <line x1="22" y1="45" x2="25" y2="45" />
      <line x1="30" y1="45" x2="33" y2="45" />
      <line x1="22" y1="55" x2="25" y2="55" />
      <line x1="30" y1="55" x2="33" y2="55" />
      <line x1="22" y1="65" x2="25" y2="65" />
      <line x1="30" y1="65" x2="33" y2="65" />
      <line x1="22" y1="75" x2="25" y2="75" />
      <line x1="30" y1="75" x2="33" y2="75" />
      
      {/* Mid-rise villa / residential house */}
      <path d="M50 45 L75 25 L100 45" stroke="currentColor" />
      <rect x="53" y="45" width="41" height="45" rx="1" stroke="currentColor" />
      <rect x="70" y="65" width="10" height="25" stroke="currentColor" />
      <rect x="58" y="52" width="8" height="8" stroke="currentColor" />
      <rect x="82" y="52" width="8" height="8" stroke="currentColor" />
    </svg>
  );
}

function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const callUrl = getCallUrl();

  return (
    <section
      ref={ref}
      className="relative min-h-screen lg:min-h-[95vh] hero-gradient flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-navy-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div
          className={`lg:col-span-7 flex flex-col items-start ${
            isInView ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          {/* Real Estate Website Demo Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/5 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
            <span>Real Estate Website Demo</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Find the Right Property <br className="hidden sm:inline" />
            With <span className="text-gradient-gold">Trusted Local Guidance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-navy-200 max-w-xl mb-6 font-light leading-relaxed">
            Explore verified homes, plots, and commercial spaces with expert support from enquiry to site visit.
          </p>

          {/* Trust Micro-text */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-gold-400 text-sm font-medium mb-8">
            <div className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-gold-400" />
              <span>Verified Listings</span>
            </div>
            <span className="hidden sm:inline text-navy-400">•</span>
            <div className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-gold-400" />
              <span>Site Visit Support</span>
            </div>
            <span className="hidden sm:inline text-navy-400">•</span>
            <div className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-gold-400" />
              <span>Transparent Guidance</span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('properties')}
              className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl text-center shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Properties
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-green-900/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={callUrl}
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <PhoneIcon className="w-5 h-5 text-white/70" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Right Side Visual Block */}
        <div
          className={`hidden lg:block lg:col-span-5 relative w-full h-[500px] ${
            isInView ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          {/* Main Card with Gradient Border */}
          <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-tr from-navy-700 via-navy-800 to-gold-400/40 shadow-2xl overflow-hidden">
            <div className="w-full h-full bg-navy-950 rounded-3xl relative overflow-hidden flex items-center justify-center">
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950/80 z-10" />
              {/* Graphic illustration */}
              <HouseIllustration />
            </div>
          </div>

          {/* Floating badge 1: 50+ Options */}
          <div className="absolute top-[15%] -left-[10%] animate-float glass-card rounded-2xl p-4 flex items-center gap-3 shadow-2xl select-none z-20">
            <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center">
              <HomeIcon className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-xs text-navy-300 font-medium leading-none">Catalog</p>
              <h4 className="text-white font-bold text-base mt-1">50+ Property Options</h4>
            </div>
          </div>

          {/* Floating badge 2: Verified Listings */}
          <div
            className="absolute bottom-[25%] -right-[8%] animate-float glass-card rounded-2xl p-4 flex items-center gap-3 shadow-2xl select-none z-20"
            style={{ animationDelay: '2s' }}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-8.06 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.434 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.434 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.434 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138 3.42 3.42 0 001.946-.806 3.42 3.42 0 014.434 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-navy-300 font-medium leading-none">Security</p>
              <h4 className="text-white font-bold text-base mt-1">100% Verified Listings</h4>
            </div>
          </div>

          {/* Floating badge 3: Site Visit Assistance */}
          <div
            className="absolute bottom-[8%] left-[5%] animate-float glass-card rounded-2xl p-4 flex items-center gap-3 shadow-2xl select-none z-20"
            style={{ animationDelay: '4s' }}
          >
            <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-xs text-navy-300 font-medium leading-none">Support</p>
              <h4 className="text-white font-bold text-base mt-1">Site Visit Assistance</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
