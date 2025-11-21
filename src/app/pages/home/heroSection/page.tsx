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
  },
  { 
    id: 2, 
    title: 'Practice Areas', 
    description: 'Explore specialized legal expertise across Constitutional, Criminal, Civil, and Corporate Law.',
    route: '/pages/practiceAreas',
  },
  { 
    id: 3, 
    title: 'Professional Life', 
    description: 'Track record of landmark cases, achievements, and 25+ years of legal excellence.',
    route: '/pages/professionalLife',
  },
  { 
    id: 4, 
    title: 'Social Life', 
    description: 'Community work, public speaking, and commitment to social justice beyond legal practice.',
    route: '/pages/socialLife',
  }
]

export default function HeroSection() {
  const router = useRouter()

  const handleCardClick = (route: string) => {
    router.push(route)
  }

  return (
    <>
      <section className="relative min-h-screen">
        {/* Background image layer - z-0 so content is above */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('/assets/gaurav-shrama-banner.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.7)',
          }}
        ></div>

        {/* Content container */}
        <div className="
          relative z-10 min-h-screen flex items-center 
          justify-center md:justify-end
          px-6
          md:pr-12 lg:pr-24 xl:pr-32 
          text-white
        ">
          <div className="max-w-3xl w-full">
            <p
              className="
                opacity-80 
                font-playfair 
                text-2xl md:text-3xl lg:text-4xl xl:text-4xl 
                leading-snug
                text-justify
              "
            >
              Namaskar, I am <span className="text-[1.1em] font-semibold">Gaurav Sharma</span>. Here <span className="text-[1.1em] font-semibold">law meets life</span>. I fight cases, turn ideas into <span className="text-[1.1em] font-semibold">impact</span>, call out the system, 
              and sometimes… just vibe. Catch my <span className="text-[1.1em] font-semibold">legal takes</span>, courtroom stories, and 
              community-driven narratives. This isn't just a profession – it's a <span className="text-[1.1em] font-semibold">purpose</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Bar - Positioned to overlap banner */}
      <div className="relative -mt-[25px] z-20 bg-transparent py-1 flex justify-center">
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
                         w-[200px] md:w-[260px] h-[480px] flex flex-col justify-center items-center text-center
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
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#0a0e27] mb-4 px-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="px-4 text-[15px] leading-snug text-gray-600 mb-6">
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
    </>
  )
}
