'use client'

import React from 'react'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure tailored to your business needs.',
      icon: '☁️',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security.',
      icon: '🔒',
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights.',
      icon: '📊',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance for digital transformation.',
      icon: '💡',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-normal text-[#1a1f3a] tracking-tight mb-6">
            Our Services
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#1a1f3a] opacity-70 leading-relaxed">
            Comprehensive IT solutions designed to elevate your business to new heights.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#f8f9ff] to-white border border-[#e8e9ff] rounded-[20px] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-[24px] font-semibold text-[#1a1f3a] mb-4">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#1a1f3a] opacity-70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
