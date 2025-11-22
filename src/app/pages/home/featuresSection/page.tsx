'use client'

import React from 'react'

export default function FeaturesSection() {
  const services = [
    'Constitutional Law & Fundamental Rights',
    'Criminal Defense & Litigation',
    'Civil Rights & Public Interest Litigation',
    'Corporate & Commercial Law',
    'Family Law & Matrimonial Disputes',
    'Property & Real Estate Law',
  ]

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-normal text-black tracking-tight mb-4">
            Legal Services
          </h2>
          <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
            Comprehensive legal expertise across multiple practice areas, delivering justice with integrity and excellence.
          </p>
        </div>

        {/* Content Grid - Services List & Circular Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-center">
          {/* Left - Services List */}
          <div className="space-y-3">
            {services.map((service: string, idx: number) => (
              <div 
                key={idx}
                className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                {/* Service Name */}
                <div className="flex-1 border-b border-black/10 pb-3">
                  <p className="text-[15px] md:text-[17px] text-black font-light leading-relaxed group-hover:text-black/70 transition-colors">
                    {service}
                  </p>
                </div>
              </div>
            ))}

            {/* Explore More Button */}
            <div className="pt-4">
              <button className="bg-black text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-black/80 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                <span>Explore All Services</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Circular Image (Shifted Left) */}
          <div className="flex justify-center lg:justify-start lg:pl-8">
            <div 
  className="relative w-[350px] h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl"
  style={{
    backgroundImage: `url('/assets/circle.jpeg')`,
    backgroundPosition: 'left center', // Changed from 'center'
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
  }}
>

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Optional decorative ring */}
              <div className="absolute inset-0 border-4 border-black/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
