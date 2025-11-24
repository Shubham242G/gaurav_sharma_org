


import HeroSection from './heroSection/page'

import AboutSection from './aboutSection/page'
import FeaturesSection from './featuresSection/page'
import CTASection from './ctaSection/page'
import TestimonialsSection from './testimoniesSection/page'
import ContactSection from './contactSection/page'


export default function HomePage() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      {/* <AboutSection /> */}
      <FeaturesSection />
      <CTASection />
      <TestimonialsSection />
      <ContactSection/>
    </main>
  )
}



