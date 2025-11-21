'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const services = [
  { 
    id: 1, 
    title: 'Personal Life', 
    description: 'Discover the person behind the lawyer – values, philosophy, and life beyond the courtroom.',
    route: '/pages/personalLife',
    icon: '👤'
  },
  { 
    id: 2, 
    title: 'Practice Areas', 
    description: 'Explore specialized legal expertise across Constitutional, Criminal, Civil, and Corporate Law.',
    route: '/pages/practiceAreas',
    icon: '⚖️'
  },
  { 
    id: 3, 
    title: 'Professional Life', 
    description: 'Track record of landmark cases, achievements, and 25+ years of legal excellence.',
    route: '/pages/professionalLife',
    icon: '💼'
  },
  { 
    id: 4, 
    title: 'Social Life', 
    description: 'Community work, public speaking, and commitment to social justice beyond legal practice.',
    route: '/pages/socialLife',
    icon: '🤝'
  }
]

const ServicesBar: React.FC = () => {
  const router = useRouter()

  const handleCardClick = (route: string) => {
    console.log('Navigating to:', route) // For debugging
    router.push(route)
  }

  return (
    <div className="top-0 z-20 flex justify-center -mt-20">
      <div className="flex flex-row gap-8 px-6 md:px-12" style={{ perspective: '1000px' }}>
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            whileHover={{ 
              scale: 1.08,
              y: -20,
              rotateX: 5,
              rotateY: 5,
              boxShadow: '0 25px 70px rgba(184, 185, 255, 0.5)',
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }
            }}
            transition={{ 
              delay: idx * 0.08, 
              type: "spring", 
              stiffness: 75 
            }}
            onClick={() => handleCardClick(service.route)}
            className="relative overflow-hidden bg-white/80 backdrop-blur-lg rounded-3xl border border-[#e8e9ff] shadow-lg
                       w-[200px] md:w-[260px] h-[420px] flex flex-col justify-center items-center text-center
                       select-none cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(0)',
            }}
          >
            {/* Top gradient overlay */}
            <div 
              className="absolute top-0 left-0 right-0 h-24 rounded-t-3xl"
              style={{
                background: 'linear-gradient(180deg, rgba(235, 236, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)',
                pointerEvents: 'none',
              }}
            ></div>

            <div style={{ transform: 'translateZ(20px)' }} className="px-4">
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0a0e27] mb-3 px-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-[15px] leading-snug text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="inline-flex items-center gap-2 text-[#5b5ff5] font-medium text-sm hover:gap-3 transition-all">
                <span>Learn More</span>
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
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ServicesBar
