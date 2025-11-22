'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Testimonial {
  id: number
  name: string
  designation: string
  case: string
  image: string
  rating: number
  testimony: string
  highlight: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "CEO, Tech Innovations Pvt Ltd",
    case: "Corporate Fraud Defense",
    image: "RK",
    rating: 5,
    testimony: "Gaurav Sharma didn't just win my case – he restored my faith in the legal system. His dedication, strategic thinking, and courtroom presence are unparalleled.",
    highlight: "Saved ₹500Cr+ and restored corporate reputation"
  },
  {
    id: 2,
    name: "Priya Singh",
    designation: "Social Activist & NGO Founder",
    case: "Human Rights PIL",
    image: "PS",
    rating: 5,
    testimony: "In our darkest hour fighting for tribal rights, Gaurav stood by us with unwavering support. The landmark judgment benefited 2 million families across 8 states.",
    highlight: "Landmark judgment affecting 2M+ families"
  },
  {
    id: 3,
    name: "Dr. Anil Mehta",
    designation: "Professor, NLS Bangalore",
    case: "Constitutional Matter",
    image: "AM",
    rating: 5,
    testimony: "Gaurav Sharma's constitutional law expertise is exceptional. His arguments in the Supreme Court were brilliant – combining deep legal scholarship with persuasive oratory.",
    highlight: "Cited in 100+ subsequent constitutional cases"
  },
  {
    id: 4,
    name: "Kavita Deshmukh",
    designation: "Software Engineer & Gig Worker",
    case: "Labour Rights - Gig Economy",
    image: "KD",
    rating: 5,
    testimony: "Gaurav fought for gig workers' rights when nobody else would. His 2023 landmark case gave us social security, minimum wages, and dignity.",
    highlight: "Changed lives of 5M+ gig economy workers"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    designation: "Senior Journalist",
    case: "Media Freedom vs Contempt",
    image: "VM",
    rating: 5,
    testimony: "When I faced contempt charges, Gaurav defended not just me, but press freedom itself. The acquittal strengthened journalistic protections across India.",
    highlight: "Strengthened press freedom protections nationwide"
  }
]

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const handleConsultationClick = () => {
    // Navigate to home page with hash anchor
    router.push('#contactSection')
    
    // Alternative: Scroll to element if on same page
    setTimeout(() => {
      const contactSection = document.getElementById('contactSection')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-normal text-black tracking-tight mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] md:text-[16px] text-black/70 leading-relaxed"
          >
            Real stories from clients whose lives were transformed through dedicated legal representation.
          </motion.p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-all shadow-lg"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-all shadow-lg"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Testimonials Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 py-6">
              {testimonials.map((testimonial: Testimonial, idx: number) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex-shrink-0 w-[380px] bg-white border-2 border-black/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-black/30 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-black/5 to-transparent rounded-bl-[80px]"></div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-black/5 group-hover:text-black/10 transition-colors">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-start gap-3 mb-4 relative z-10">
                    {/* Avatar with initials */}
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
                      {testimonial.image}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-black mb-0.5">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-black/60 mb-1.5">
                        {testimonial.designation}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i: number) => (
                          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Case Type Badge */}
                  <div className="inline-block bg-black/5 px-3 py-1 rounded-full text-black/70 text-xs font-medium mb-3">
                    {testimonial.case}
                  </div>

                  {/* Testimony */}
                  <p className="text-[13px] text-black/80 leading-relaxed mb-4">
                    &ldquo;{testimonial.testimony}&rdquo;
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-black/5 border-l-3 border-black px-3 py-2 rounded-r-lg">
                    <p className="text-xs font-medium text-black/90">
                      ✓ {testimonial.highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-black/70 text-base mb-4">
            Ready to experience exceptional legal representation?
          </p>
          <button 
            onClick={handleConsultationClick}
            className="bg-black text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-black/80 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
          </button>
        </motion.div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
