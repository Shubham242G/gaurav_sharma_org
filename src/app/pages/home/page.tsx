

import Header from '../../components/Header'
import HeroSection from './heroSection/page'
import ServicesSection from './servicesSection/page'
import AboutSection from './aboutSection/page'
import FeaturesSection from './featuresSection/page'
import CTASection from './ctaSection/page'
import Footer from '../../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}



