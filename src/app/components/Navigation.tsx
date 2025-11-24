'use client'

import React, { useState } from 'react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[22px] md:text-[24px] font-semibold text-[#0a0e27] tracking-tight">
              Gaurav Sharma
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#0a0e27] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#0a0e27] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#0a0e27] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <button className="w-full px-6 py-2.5 border border-[#0a0e27] text-[#0a0e27] rounded-full text-[14px] font-medium">
              Schedule a call
            </button>
            <button className="w-full px-6 py-2.5 bg-[#1a1f3a] text-white rounded-full text-[14px] font-medium flex items-center justify-center gap-2">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
