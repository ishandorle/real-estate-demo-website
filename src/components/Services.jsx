import React from 'react';
import { useInView } from '../hooks';
import { SERVICES } from '../constants';
import {
  HomeIcon,
  SellIcon,
  PlotIcon,
  BuildingIcon,
  VisitIcon,
  DocumentIcon,
} from './Icons';

const iconMap = {
  home: HomeIcon,
  sell: SellIcon,
  plot: PlotIcon,
  commercial: BuildingIcon,
  visit: VisitIcon,
  document: DocumentIcon,
};

function ServiceCard({ service, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const IconComponent = iconMap[service.icon] || HomeIcon;

  return (
    <div
      ref={ref}
      className={`bg-gray-50 hover:bg-white rounded-2xl p-6 md:p-8 hover:premium-shadow-hover hover:transform hover:-translate-y-1 transition-all duration-300 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center mb-5">
        <IconComponent className="w-6 h-6 text-gold-400" />
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-navy-900 mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-charcoal-500 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

function Services() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Real Estate Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
