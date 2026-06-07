import React from 'react';
import { scrollToSection } from '../hooks';
import { getWhatsAppUrl, getCallUrl, WHATSAPP_MESSAGES } from '../constants';
import { WhatsAppIcon, PhoneIcon } from './Icons';

function Footer() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const callUrl = getCallUrl();

  const handleLinkClick = (id) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-900">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 mb-4 text-left"
            >
              <span className="font-display text-2xl font-bold text-white tracking-wide">
                Prime<span className="text-gold-400">Nest</span>
              </span>
            </button>
            <p className="text-sm text-navy-300 font-light mb-6 max-w-sm leading-relaxed">
              Trusted Property Guidance • Connecting serious buyers with verified residential plots, apartments, and commercial spaces.
            </p>
            {/* Demo badge description */}
            <div className="bg-navy-900 border border-navy-800/80 rounded-xl p-4 max-w-sm">
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest block mb-1">
                Demo Presentation
              </span>
              <p className="text-xs text-navy-400 font-light leading-relaxed">
                This is a demo website template created for real estate agencies, property consultants, and independent agents.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => handleLinkClick('properties')}
                  className="text-navy-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Featured Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-navy-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Services Offered
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('why-us')}
                  className="text-navy-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="text-navy-300 hover:text-gold-400 transition-colors text-sm font-medium"
                >
                  Office Location
                </button>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 transition-colors text-sm font-semibold flex items-center gap-1.5"
                >
                  <span>Enquire Now</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="text-sm text-navy-300 font-light leading-relaxed">
                <strong className="block text-white font-medium mb-1">Office Address:</strong>
                Main Road, Satara, Maharashtra - 415001
              </li>
              <li className="text-sm text-navy-300 font-light">
                <strong className="block text-white font-medium mb-1">Phone Number:</strong>
                +91 98765 43210
              </li>
              <li className="text-sm text-navy-300 font-light">
                <strong className="block text-white font-medium mb-1">Business Hours:</strong>
                10:00 AM – 8:00 PM (Everyday)
              </li>
            </ul>

            {/* Micro buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={callUrl}
                className="flex items-center gap-1.5 bg-navy-800 hover:bg-navy-900 border border-navy-700 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-900 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="text-xs text-navy-400 font-light">
            &copy; {new Date().getFullYear()} PrimeNest Realty. All rights reserved. Created as a Premium Real Estate Agent Website Demo.
          </p>
          <div className="flex gap-4 text-xs text-navy-400 font-light">
            <span>Verified Properties Only</span>
            <span>•</span>
            <span>Site Visit Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
