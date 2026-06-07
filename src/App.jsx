import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import FeaturedProperties from './components/FeaturedProperties'
import EnquirySection from './components/EnquirySection'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Categories from './components/Categories'
import SiteVisitCTA from './components/SiteVisitCTA'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedProperties />
        <EnquirySection />
        <Services />
        <WhyChooseUs />
        <Categories />
        <SiteVisitCTA />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
