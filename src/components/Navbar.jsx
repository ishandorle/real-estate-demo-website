import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../hooks';
import { getWhatsAppUrl, getCallUrl, WHATSAPP_MESSAGES } from '../constants';
import { MenuIcon, CloseIcon, WhatsAppIcon, PhoneIcon } from './Icons';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'View Properties', target: 'properties' },
    { label: 'Services', target: 'services' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target) => {
    setIsMobileMenuOpen(false);
    scrollToSection(target);
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const callUrl = getCallUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-xl border-b border-navy-800/50 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-left"
        >
          <span className="font-display text-2xl font-bold text-white tracking-wide">
            Prime<span className="text-gold-400">Nest</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="text-sm font-medium text-navy-100 hover:text-gold-400 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={callUrl}
            className="flex items-center gap-2 border border-white/30 text-white hover:border-gold-400 hover:text-gold-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-md shadow-green-900/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-navy-950 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-[calc(100vh-60px)] justify-between p-6">
          <nav className="flex flex-col gap-6 pt-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="text-xl font-medium text-left text-navy-100 hover:text-gold-400 transition-colors duration-200 py-2 border-b border-navy-900"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-12">
            <p className="text-center text-xs text-navy-400 mb-2">
              Get in touch directly with our expert team
            </p>
            <a
              href={callUrl}
              className="flex items-center justify-center gap-3 border border-white/30 text-white py-4 rounded-xl font-medium text-lg hover:border-gold-400 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Call +91 98765 43210</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green-900/30"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
