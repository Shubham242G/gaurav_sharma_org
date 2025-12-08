'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function FeaturesSection() {
  const [isImageHovered, setIsImageHovered] = useState(false)
  const router = useRouter()

  const services = [
    'Constitutional Law & Fundamental Rights',
    'Criminal Defense & Litigation',
    'Civil Rights & Public Interest Litigation',
    'Corporate & Commercial Law',
    'Family Law & Matrimonial Disputes',
    'Property & Real Estate Law',
  ]

  const books = [
    { title: "India that is Bharat", author: "J Sai Deepak", image: "/assets/IndiaBharat.jpg" },
    { title: "Hindus in Hindu Rashtra", author: "Anand Ranganathan", image: "/assets/HindusAndHinduRashtra.webp" },
    { title: "Falling Over Backwards", author: "Arun Shourie", image: "/assets/FallingOverBackwards.webp" },
    { title: "The India Way", author: "S Jaishankar", image: "/assets/TheIndiaWay.webp" },
    { title: "Rewriting Indian History", author: "Francis Gautier", image: "/assets/RewritingIndianHistory.jpg" },
    { title: "The Courtroom Genius", author: "Nani Palkhiwala", image: "/assets/Courtroom.jpg" },
  ]

  const trackRef = useRef(null)

  const handleExploreClick = () => {
    router.push('/pages/practiceAreas')
  }

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-normal text-black tracking-tight mb-4">
            Legal Services
          </h2>
          <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
            Comprehensive legal expertise across multiple practice areas, delivering justice with integrity and excellence.
          </p>
        </div>

        {/* Services + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-center mb-20">
          <div className="space-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 border-b border-black/10 pb-3">
                  <p className="text-[15px] md:text-[17px] text-black font-light leading-relaxed group-hover:text-black/70 transition-colors">
                    {service}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button 
                onClick={handleExploreClick}
                className="bg-black text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-black/80 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>Explore All Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Circular Image */}
          <div className="flex justify-center lg:justify-start lg:pl-8">
            <div 
              className="relative w-[350px] h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage: `url('/assets/circle.jpeg')`,
                backgroundPosition: 'left center',
                backgroundSize: 'cover',
                filter: isImageHovered ? 'grayscale(0%) brightness(1.1)' : 'grayscale(100%) brightness(0.8)',
              }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 border-4 border-black/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Infinite Book Slider */}
        <div className="border-t border-black/10 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-black tracking-tight mb-4">
              Gaurav Sharma's Recommended Reads
            </h3>
            <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
              Books that shaped his legal philosophy and strategic thinking
            </p>
          </div>

          {/* Slider Animation CSS */}
          <style>{`
            @keyframes smoothScrollRight {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="overflow-hidden relative w-full">
            <div
              ref={trackRef}
              className="flex w-max animate-[smoothScrollRight_30s_linear_infinite]"
            >
              {[...books, ...books].map((book, idx) => (
                <div key={idx} className="w-64 mx-4 flex-shrink-0">
                  <div className="h-72 p-6 rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2">
                    {/* Real Book Image */}
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img
                        src={book.image}
                        alt={`${book.title} by ${book.author}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-black line-clamp-2 leading-tight mb-2">{book.title}</h4>
                    <p className="text-sm text-black/70 font-medium">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
