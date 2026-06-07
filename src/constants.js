// WhatsApp and Contact Configuration
export const PHONE_NUMBER = '+919876543210';
export const WHATSAPP_NUMBER = '919876543210';

export const WHATSAPP_MESSAGES = {
  general: 'Hello PrimeNest Realty, I want to enquire about available properties.',
  siteVisit: 'Hello PrimeNest Realty, I want to schedule a site visit for a property.',
  requirement: (budget, location, type) =>
    `Hello PrimeNest Realty, I am looking for a property. My budget is ${budget || '_____'}. Preferred location is ${location || '_____'}. Property type is ${type || '_____'}.`,
  property: (name, location) =>
    `Hello PrimeNest Realty, I am interested in the ${name} at ${location}. Please share more details, photos, and site visit availability.`,
};

export const getWhatsAppUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const getCallUrl = () => `tel:${PHONE_NUMBER}`;

export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/Main+Road+Satara+Maharashtra';

// Property Data
export const PROPERTIES = [
  {
    id: 1,
    type: '2 BHK Apartment',
    location: 'Satara City',
    price: '₹45 Lakhs onwards',
    features: ['850 sq.ft', 'Parking', 'Lift', 'Ready Possession'],
    image: 'apartment',
    tag: 'Best Seller',
  },
  {
    id: 2,
    type: '3 BHK Premium Flat',
    location: 'Near Main Road',
    price: '₹72 Lakhs onwards',
    features: ['1200 sq.ft', 'Balcony', 'Modern Amenities', 'Family Friendly'],
    image: 'premium-flat',
    tag: 'Premium',
  },
  {
    id: 3,
    type: 'Residential Plot',
    location: 'Developing Area',
    price: '₹18 Lakhs onwards',
    features: ['Clear Title', 'Road Touch', 'Good Investment', 'Peaceful Location'],
    image: 'plot',
    tag: 'Investment',
  },
  {
    id: 4,
    type: 'Commercial Shop',
    location: 'Prime Market Area',
    price: '₹35 Lakhs onwards',
    features: ['Road Facing', 'High Footfall', 'Business Location', 'Investment Potential'],
    image: 'commercial',
    tag: 'Commercial',
  },
];

// Services Data
export const SERVICES = [
  {
    title: 'Property Buying',
    description: 'Expert guidance to find the perfect property matching your budget and preferences.',
    icon: 'home',
  },
  {
    title: 'Property Selling',
    description: 'Get the best value for your property with our market knowledge and buyer network.',
    icon: 'sell',
  },
  {
    title: 'Residential Plots',
    description: 'Verified residential plots with clear titles in prime and developing locations.',
    icon: 'plot',
  },
  {
    title: 'Commercial Spaces',
    description: 'Shops, offices, and commercial properties in high-footfall business locations.',
    icon: 'commercial',
  },
  {
    title: 'Site Visit Support',
    description: 'We coordinate and accompany you on site visits for a hassle-free experience.',
    icon: 'visit',
  },
  {
    title: 'Documentation Guidance',
    description: 'Assistance with property documentation, verification, and legal procedures.',
    icon: 'document',
  },
];

// Trust Points
export const TRUST_POINTS = [
  { title: 'Verified Properties', icon: 'verified' },
  { title: 'Local Market Knowledge', icon: 'knowledge' },
  { title: 'Budget-Based Suggestions', icon: 'budget' },
  { title: 'Direct WhatsApp Support', icon: 'whatsapp' },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    title: 'Verified Property Details',
    description: 'Every property listing is checked for accurate details, pricing, and ownership status.',
  },
  {
    title: 'Transparent Communication',
    description: 'No hidden charges or misleading information. Clear and honest guidance at every step.',
  },
  {
    title: 'Local Area Knowledge',
    description: 'Deep understanding of localities, market rates, and upcoming developments in the area.',
  },
  {
    title: 'Site Visit Coordination',
    description: 'We arrange and accompany you on property visits at your convenience.',
  },
  {
    title: 'Budget-Based Guidance',
    description: 'We understand your budget and suggest only properties that match your financial comfort.',
  },
  {
    title: 'Support Till Final Decision',
    description: 'From first enquiry to final documentation, we guide you through the entire process.',
  },
];

// Categories
export const CATEGORIES = [
  { name: 'Flats', icon: 'flat', count: '15+' },
  { name: 'Plots', icon: 'plot', count: '20+' },
  { name: 'Shops', icon: 'shop', count: '10+' },
  { name: 'Bungalows', icon: 'bungalow', count: '8+' },
  { name: 'Investment Properties', icon: 'investment', count: '12+' },
  { name: 'Rental Properties', icon: 'rental', count: '18+' },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Rahul P.',
    role: 'Home Buyer',
    text: 'PrimeNest Realty made my first home buying experience incredibly smooth. They understood my budget, showed me verified properties, and guided me through every step. Highly recommended for first-time buyers!',
    rating: 5,
  },
  {
    name: 'Neha S.',
    role: 'Plot Buyer',
    text: 'I was looking for a residential plot with a clear title and good location. PrimeNest Realty helped me find the perfect plot within my budget. Their local knowledge saved me from several risky options.',
    rating: 5,
  },
  {
    name: 'Amit K.',
    role: 'Property Seller',
    text: 'Selling my commercial property was stress-free with PrimeNest Realty. They connected me with genuine buyers, handled documentation, and ensured a transparent transaction. Great service!',
    rating: 5,
  },
];
