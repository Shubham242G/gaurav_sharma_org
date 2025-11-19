'use client'

import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#f8f9ff] to-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-normal text-[#1a1f3a] tracking-tight mb-6">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#1a1f3a] opacity-70 leading-relaxed mb-8">
              With over a decade of experience, we've helped hundreds of companies navigate their digital transformation journey. Our team of experts combines technical excellence with strategic thinking.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#5b5ff5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[15px] text-[#1a1f3a] opacity-80">Expert team with 10+ years experience</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#5b5ff5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[15px] text-[#1a1f3a] opacity-80">500+ successful projects delivered</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#5b5ff5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[15px] text-[#1a1f3a] opacity-80">24/7 dedicated support</p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <div className="text-[48px] md:text-[64px] font-bold text-[#5b5ff5] mb-2">500+</div>
              <p className="text-[15px] text-[#1a1f3a] opacity-70">Projects Completed</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <div className="text-[48px] md:text-[64px] font-bold text-[#5b5ff5] mb-2">98%</div>
              <p className="text-[15px] text-[#1a1f3a] opacity-70">Client Satisfaction</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <div className="text-[48px] md:text-[64px] font-bold text-[#5b5ff5] mb-2">50+</div>
              <p className="text-[15px] text-[#1a1f3a] opacity-70">Expert Team</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <div className="text-[48px] md:text-[64px] font-bold text-[#5b5ff5] mb-2">24/7</div>
              <p className="text-[15px] text-[#1a1f3a] opacity-70">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
