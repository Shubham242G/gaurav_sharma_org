'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function FloatingNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    { route: '/pages/personalLife', label: 'Personal' },
    { route: '/pages/professionalLife', label: 'Professional' },
    { route: '/pages/practiceAreas', label: 'Services' },
    { route: '/pages/socialLife', label: 'Social' },
  ]

  const handleNavigation = (route: string) => {
    router.push(route)
  }

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {navItems.map((item, index) => {
        const isActive = pathname === item.route
        
        return (
          <motion.button
            key={index}
            onClick={() => handleNavigation(item.route)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative px-4 py-2.5 rounded-full transition-all duration-300
              ${isActive 
                ? 'bg-black/80 text-white backdrop-blur-sm' 
                : 'bg-white/40 text-black/70 backdrop-blur-sm hover:bg-white/60 hover:text-black'
              }
              border border-black/10 shadow-lg
            `}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label={item.label}
          >
            {/* Text Label */}
            <span className="text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>

            {/* Active indicator */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-black/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}
