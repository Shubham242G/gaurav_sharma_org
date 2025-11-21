'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NotableCase {
  id: number
  title: string
  year: string
  court: string
  brief: string
  full: string
}

const notableCases: NotableCase[] = [
  {
    id: 1,
    title: "Landmark Constitutional Victory on Privacy Rights",
    year: "2022",
    court: "Supreme Court of India",
    brief: "Successfully argued for fundamental right to privacy under Article 21.",
    full: "Successfully argued for the fundamental right to privacy under Article 21 in a precedent-setting case that impacted millions of citizens. The judgment reinforced privacy as an intrinsic part of personal liberty and dignity, setting a landmark precedent for future constitutional matters. This case involved challenging government surveillance policies and establishing clear boundaries for state intrusion into private lives. The unanimous verdict by the 5-judge bench has been cited in over 100 subsequent cases."
  },
  {
    id: 2,
    title: "Corporate Fraud Defense - ₹500 Crore Case",
    year: "2021",
    court: "Delhi High Court",
    brief: "Defended major corporation against allegations of financial misconduct.",
    full: "Defended a major Indian corporation against allegations of financial misconduct and securities fraud worth ₹500 crores. Through meticulous evidence analysis, expert testimony from forensic accountants, and proving compliance with SEBI regulations, successfully got all charges dropped. The case involved complex financial instruments, cross-border transactions, and required coordination with international law firms. Protected shareholder value and corporate reputation through strategic legal defense spanning 18 months of intense litigation."
  },
  {
    id: 3,
    title: "Human Rights Campaign for Tribal Communities",
    year: "2020",
    court: "Supreme Court of India",
    brief: "Pro-bono PIL for marginalized tribal communities seeking welfare benefits.",
    full: "Pro-bono Public Interest Litigation representing marginalized tribal communities seeking essential welfare benefits and legal protections under Forest Rights Act, 2006. Secured landmark judgment mandating policy reforms for indigenous rights across 8 states, benefiting over 2 million tribal families. The case involved challenging discriminatory government policies, presenting extensive socio-economic data, and coordinating with multiple NGOs. The judgment has been hailed as a watershed moment in tribal rights jurisprudence in India."
  },
  {
    id: 4,
    title: "Environmental Protection Case - Narmada River",
    year: "2019",
    court: "National Green Tribunal",
    brief: "Prevented illegal industrial dumping affecting 50+ villages.",
    full: "Successfully represented environmental activists in preventing illegal industrial dumping into Narmada River, affecting over 50 villages and critical wetland ecosystems. Secured immediate closure orders against 12 polluting units and mandatory environmental restoration fund of ₹200 crores. The case involved extensive environmental impact assessments, scientific expert testimonies, and satellite imagery evidence. This victory set important precedents for industrial accountability and community environmental rights."
  },
  {
    id: 5,
    title: "Workers' Rights - Gig Economy Landmark Case",
    year: "2023",
    court: "Supreme Court of India",
    brief: "Established social security rights for gig economy workers.",
    full: "Argued groundbreaking case establishing social security and minimum wage rights for gig economy workers across food delivery, ride-hailing, and freelance platforms. The judgment classified platform workers as 'employees' rather than 'independent contractors', extending ESI, PF, and other statutory benefits to over 5 million workers. This case required extensive economic analysis, comparative international law research, and testimonies from workers across 15 cities. The verdict has fundamentally reshaped India's labor law landscape in the digital age."
  },
  {
    id: 6,
    title: "Medical Negligence - ₹10 Crore Compensation",
    year: "2018",
    court: "High Court",
    brief: "Secured record compensation for victim of surgical negligence.",
    full: "Represented family in high-profile medical negligence case against premier hospital chain, securing record ₹10 crore compensation for victim of botched surgical procedure resulting in permanent disability. The case involved complex medical evidence, cross-examination of top surgeons, and establishing hospital's systemic failures in patient safety protocols. This landmark verdict established important precedents for medical accountability, informed consent standards, and quantum of compensation in medical negligence cases in India."
  }
]

export default function CTASection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused || expandedCard !== null) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notableCases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, expandedCard])

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current && expandedCard === null) {
      const cardWidth = 370
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex, expandedCard])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + notableCases.length) % notableCases.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % notableCases.length)
  }

  const handleCardClick = (id: number) => {
    setExpandedCard(id)
    setIsPaused(true)
  }

  const handleCloseExpanded = () => {
    setExpandedCard(null)
    setIsPaused(false)
  }

  return (
    <section className="relative py-16 md:py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-normal text-white tracking-tight mb-4">
            Some Notable Cases
          </h2>
          <p className="text-[14px] md:text-[16px] text-white/70 leading-relaxed">
            Landmark judgments that shaped legal precedents and transformed lives across India.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-white/90 transition-all shadow-lg"
            aria-label="Previous case"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-white/90 transition-all shadow-lg"
            aria-label="Next case"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 py-6">
              {notableCases.map((caseItem: NotableCase) => (
                <div
                  key={caseItem.id}
                  onClick={() => handleCardClick(caseItem.id)}
                  className="flex-shrink-0 w-[320px] h-[380px] bg-white border-2 border-white/20 hover:border-white rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer relative overflow-hidden transition-all duration-300"
                >
                  {/* Case Number Badge */}
                  <div className="absolute top-5 right-5 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-base">
                    {String(caseItem.id).padStart(2, '0')}
                  </div>

                  {/* Year & Court */}
                  <div className="mb-3">
                    <div className="inline-block bg-black/5 px-3 py-1 rounded-full text-black/80 text-xs mb-2">
                      {caseItem.year}
                    </div>
                    <p className="text-black/60 text-xs">{caseItem.court}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-black mb-3 leading-tight line-clamp-3">
                    {caseItem.title}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-black/70 text-sm leading-relaxed line-clamp-4">
                    {caseItem.brief}
                  </p>

                  {/* Click to Read More */}
                  <div className="absolute bottom-5 left-6 flex items-center gap-2 text-black/60 text-xs font-medium">
                    <span>Click to read full case</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {notableCases.map((_: NotableCase, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to case ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {expandedCard && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
              onClick={handleCloseExpanded}
            />

            {/* Expanded Card */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-[700px] max-h-[80vh] overflow-y-auto bg-white rounded-2xl p-8 shadow-2xl pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseExpanded}
                  className="absolute top-6 right-6 w-8 h-8 bg-black/10 hover:bg-black/20 text-black rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>

                {/* Case Number Badge */}
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                  {String(expandedCard).padStart(2, '0')}
                </div>

                {/* Content */}
                {notableCases.find((c: NotableCase) => c.id === expandedCard) && (
                  <div>
                    {/* Year & Court */}
                    <div className="mb-4 flex gap-3 flex-wrap">
                      <div className="inline-block bg-black/5 px-4 py-1.5 rounded-full text-black/80 text-sm">
                        {notableCases.find((c: NotableCase) => c.id === expandedCard)?.year}
                      </div>
                      <div className="inline-block bg-black/5 px-4 py-1.5 rounded-full text-black/80 text-sm">
                        {notableCases.find((c: NotableCase) => c.id === expandedCard)?.court}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6 leading-tight">
                      {notableCases.find((c: NotableCase) => c.id === expandedCard)?.title}
                    </h3>

                    {/* Full Description */}
                    <p className="text-black/80 text-base leading-relaxed">
                      {notableCases.find((c: NotableCase) => c.id === expandedCard)?.full}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
