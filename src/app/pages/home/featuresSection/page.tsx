'use client'

import React from 'react'

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#0a0e27]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-normal text-white tracking-tight mb-6">
            Why Choose Us
          </h2>
          <p className="text-[16px] md:text-[18px] text-white opacity-70 leading-relaxed">
            We deliver excellence through innovation, expertise, and dedication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#5b5ff5] rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-[24px] font-semibold text-white mb-4">
              Lightning Fast
            </h3>
            <p className="text-[15px] text-white opacity-70 leading-relaxed">
              Optimized solutions that deliver exceptional performance and speed.
            </p>
          </div>

          <div className="relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#5b5ff5] rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-[24px] font-semibold text-white mb-4">
              Secure & Reliable
            </h3>
            <p className="text-[15px] text-white opacity-70 leading-relaxed">
              Enterprise-grade security protecting your data 24/7.
            </p>
          </div>

          <div className="relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#5b5ff5] rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
            </div>
            <h3 className="text-[24px] font-semibold text-white mb-4">
              Always Available
            </h3>
            <p className="text-[15px] text-white opacity-70 leading-relaxed">
              Round-the-clock support ensuring your business never stops.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
