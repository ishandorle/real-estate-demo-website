import React from 'react';
import { useInView } from '../hooks';
import { TRUST_POINTS } from '../constants';
import { ShieldIcon, KnowledgeIcon, BudgetIcon, WhatsAppIcon } from './Icons';

const iconMap = {
  verified: <ShieldIcon className="w-6 h-6 text-navy-800" />,
  knowledge: <KnowledgeIcon className="w-6 h-6 text-navy-800" />,
  budget: <BudgetIcon className="w-6 h-6 text-navy-800" />,
  whatsapp: <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />,
};

function TrustBar() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white border-y border-navy-100/40 py-10 relative z-20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {TRUST_POINTS.map((point, index) => {
            const icon = iconMap[point.icon];
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 rounded-2xl hover:bg-navy-50/50 transition-colors duration-200"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>

                {/* Text content */}
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm sm:text-base leading-tight mb-1">
                    {point.title}
                  </h4>
                  <p className="text-xs text-charcoal-400">
                    Trusted guidance &amp; clarity
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
