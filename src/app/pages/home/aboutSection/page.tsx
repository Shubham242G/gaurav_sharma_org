'use client'

import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      {/* Full Width Banner - 35% of screen height */}
      <div className="relative w-full h-[47vh]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=800&fit=crop')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'grayscale(100%)', // Black & white effect
          }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Content Section */}
      {/* <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-normal text-black tracking-tight mb-6">
            Justice Through Excellence
          </h2>
          <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed mb-8">
            With over 25 years of legal expertise, I've successfully represented hundreds of clients across constitutional, criminal, civil, and corporate matters. My practice is built on integrity, dedication, and a deep commitment to justice.
          </p> */}

          {/* Checkmark List */}
          {/* <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-[15px] text-black/80">25+ years of legal excellence and courtroom experience</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-[15px] text-black/80">800+ cases successfully resolved across India</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-[15px] text-black/80">Supreme Court recognized advocate with landmark judgments</p>
            </div>
          </div> */}

          {/* Stats - Horizontal Layout without Cards */}
          {/* <div className="border-t border-black/10 pt-8">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <div className="text-[48px] md:text-[56px] font-bold text-black mb-1">25+</div>
                <p className="text-[14px] text-black/60 uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <div className="text-[48px] md:text-[56px] font-bold text-black mb-1">800+</div>
                <p className="text-[14px] text-black/60 uppercase tracking-wide">Cases Won</p>
              </div>
              <div>
                <div className="text-[48px] md:text-[56px] font-bold text-black mb-1">98%</div>
                <p className="text-[14px] text-black/60 uppercase tracking-wide">Success Rate</p>
              </div>
              <div>
                <div className="text-[48px] md:text-[56px] font-bold text-black mb-1">15</div>
                <p className="text-[14px] text-black/60 uppercase tracking-wide">Landmark Judgments</p>
              </div>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </section>
  )
}

export default AboutSection
