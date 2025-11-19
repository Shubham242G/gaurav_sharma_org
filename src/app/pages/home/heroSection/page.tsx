'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-[72px]">
      {/* Navigation Bar - Integrated */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-[22px] md:text-[24px] font-semibold text-[#0a0e27] tracking-tight">
                Be.Guardit
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="px-6 py-2.5 border border-[#0a0e27] text-[#0a0e27] rounded-full text-[14px] font-medium hover:bg-[#0a0e27] hover:text-white transition-all duration-200">
                Schedule a call
              </button>
              <button className="px-6 py-2.5 bg-[#1a1f3a] text-white rounded-full text-[14px] font-medium hover:bg-[#0a0e27] transition-all duration-200 flex items-center gap-2">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="inline-block"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Log In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center">
              <span className="w-6 h-0.5 bg-[#0a0e27]"></span>
              <span className="w-6 h-0.5 bg-[#0a0e27]"></span>
              <span className="w-6 h-0.5 bg-[#0a0e27]"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Scroll Indicator & Text */}
          <div className="relative flex items-start lg:items-center">
            {/* Scroll Down Indicator */}
            <div className="hidden lg:flex flex-col items-center gap-4 mr-8 lg:mr-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-[1px] h-16 bg-[#0a0e27] opacity-30"></div>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#0a0e27" 
                  strokeWidth="2"
                  className="opacity-50 animate-bounce"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
              <span 
                className="text-[11px] uppercase tracking-widest text-[#0a0e27] opacity-50"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                Scroll
              </span>
            </div>

            {/* Heading Text */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] font-normal text-[#1a1f3a] tracking-tight">
                Your Journey to a Digital Future. Our IT Solutions, Tailored to Your Needs.
              </h2>
            </div>
          </div>

          {/* Right Side - Purple Gradient Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Purple gradient background with stripe pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b8b9ff] via-[#d0d1ff] to-[#e8e9ff] rounded-[24px] overflow-hidden">
              {/* Diagonal stripe pattern overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    135deg,
                    transparent,
                    transparent 12px,
                    rgba(255, 255, 255, 0.4) 12px,
                    rgba(255, 255, 255, 0.4) 24px
                  )`
                }}
              ></div>
              
              {/* Additional layered gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c5c6ff] via-transparent to-transparent opacity-60"></div>
              
              {/* Subtle radial highlight */}
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                }}
              ></div>
            </div>

            {/* Optional: Placeholder for actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-[#5b5ff5] opacity-20 pointer-events-none">
              {/* Replace this with actual background image if available */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  )
}

export default HeroSection
