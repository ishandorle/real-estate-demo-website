import React from 'react';
import { useInView } from '../hooks';
import { CATEGORIES, getWhatsAppUrl } from '../constants';
import {
  HomeIcon,
  PlotIcon,
  BuildingIcon,
  BungalowIcon,
  InvestmentIcon,
  RentalIcon,
  ArrowRightIcon,
} from './Icons';

const iconMap = {
  flat: HomeIcon,
  plot: PlotIcon,
  shop: BuildingIcon,
  bungalow: BungalowIcon,
  investment: InvestmentIcon,
  rental: RentalIcon,
};

function CategoryCard({ category, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const IconComponent = iconMap[category.icon] || HomeIcon;

  const message = `Hello PrimeNest Realty, I am interested in ${category.name}. Please share available options.`;
  const whatsappUrl = getWhatsAppUrl(message);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`bg-gray-50 hover:bg-navy-850 group rounded-2xl p-6 text-center flex flex-col items-center justify-between cursor-pointer border border-transparent hover:border-navy-700/30 hover:premium-shadow-hover hover:transform hover:-translate-y-1 transition-all duration-300 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-navy-50 group-hover:bg-navy-800 flex items-center justify-center mb-4 transition-colors duration-300">
        <IconComponent className="w-6 h-6 text-navy-800 group-hover:text-gold-400 transition-colors duration-300" />
      </div>

      {/* Name and Count */}
      <div>
        <h3 className="font-semibold text-navy-900 group-hover:text-white transition-colors duration-300 mb-1">
          {category.name}
        </h3>
        <p className="text-charcoal-400 group-hover:text-navy-300 transition-colors duration-300 text-xs">
          {category.count} listings
        </p>
      </div>

      {/* View/Enquire CTA */}
      <div className="mt-4 flex items-center gap-1 text-gold-600 group-hover:text-gold-400 font-medium text-xs">
        <span>Enquire Now</span>
        <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </a>
  );
}

function Categories() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="bg-white section-padding">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Explore By Property Type
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
