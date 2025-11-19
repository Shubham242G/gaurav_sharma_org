'use client'

import React from 'react'

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#5b5ff5] to-[#4a4ed5]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[40px] md:text-[52px] lg:text-[72px] leading-[1.1] font-normal text-white tracking-tight mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[16px] md:text-[20px] text-white opacity-90 leading-relaxed mb-10">
            Let's discuss how our IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#5b5ff5] rounded-full text-[16px] font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full text-[16px] font-medium hover:bg-white hover:text-[#5b5ff5] transition-all duration-200">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
