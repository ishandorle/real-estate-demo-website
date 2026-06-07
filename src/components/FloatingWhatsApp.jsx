import React, { useState } from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';
import { WhatsAppIcon } from './Icons';

function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip bubble */}
      <div
        className={`bg-navy-950 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl mr-3 pointer-events-none transition-all duration-300 transform origin-right ${
          showTooltip
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-4 scale-75'
        }`}
      >
        <span className="text-gold-400">Online</span> • Chat with us!
        {/* Pointer shape */}
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-navy-950 rotate-45" />
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full w-14 h-14 lg:w-16 lg:h-16 shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8" />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
