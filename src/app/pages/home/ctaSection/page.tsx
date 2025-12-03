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
    title: "HAVELLS INDIA LIMITED vs Union of India",
    year: "Recent",
    court: "Delhi High Court",
    brief: "Exposed corporate malpractices and environmental harm by electronics manufacturers.",
    full: "As someone deeply passionate about farming and nature, I was always troubled by the harmful practices of electronics manufacturers that came at the cost of our environment. This case gave me the platform to channel that concern into action. Arguing before the Delhi High Court, I exposed corporate malpractices, regulatory lapses, and the undue gains reaped by manufacturers at nature's expense. The matter didn't just resonate within the courtroom—it caught the attention of the media, earned public appreciation, and was commended by the bench. It was more than a legal victory; it was a step toward environmental justice."
  },
  {
    id: 2,
    title: "Rishabh @ Gaurav Bhagat vs State",
    year: "2025",
    court: "Trial Court / Delhi High Court",
    brief: "Successfully defended three men falsely accused in rape case; all acquitted after 8 years.",
    full: "This is a false rape case. Being a man I know and understand how these allegations can affect someone's life. I successfully obtained anticipatory bail for all three of my clients. After 8 years of the legal fight, all my clients were acquitted in July 2025. The case was indeed a complex one, but my clients and I were certain that we would get justice. We would be further filing a compensation suit for damages of ₹50 crore before the Delhi High Court seeking a compensation scheme for 'men' framed in false rape cases."
  },
  {
    id: 3,
    title: "Sumona Kaushik vs Yatin Kumar",
    year: "Recent",
    court: "Family Court",
    brief: "Enabled mother to take her daughter to Canada; appreciated by Court for clarity on law.",
    full: "This is one of the cases which is very near to my heart. Here, I was able to successfully procure an order from the Court to enable the mother to take her daughter to Canada. I was appreciated by the Court in the judgment for clarity on law and submissions made for the welfare of the minor child."
  },
  {
    id: 4,
    title: "Mobile PNDT License Approval for Max Labs",
    year: "Recent",
    court: "Regulatory Authority",
    brief: "First-ever mobile ultrasound center license, revolutionizing radiology sector.",
    full: "I can proudly say that Mednlaw, is the only firm to have successfully procured the license for a mobile ultrasound center for Max Labs. These centers have made it very easy for the elderly and bed-ridden individuals to get the ultrasound done. This particular step of Max Labs and mine has for sure revolutionized the radiology sector and has come up as a relief to a majority of people."
  },
  {
    id: 5,
    title: "Shamsher Gurjar vs Union of India",
    year: "Ongoing",
    court: "Delhi High Court",
    brief: "Right to be forgotten case against Google and media houses post-acquittal.",
    full: "The right to be forgotten is a fundamental right, and therefore it is imperative for the authorities to expunge all allegations and records of the case from platforms like Google, Twitter, etc. from official records following an acquittal. Accordingly, I have filed a petition in High Court against the tech platform Google, and media houses - TV-18 and Times Internet to ensure that all such allegations and their records are duly removed."
  },
  {
    id: 6,
    title: "Assistant Director IB vs Parveen @ Kale",
    year: "Recent",
    court: "Trial Court",
    brief: "Plea bargain resulting in no punishment for economically disadvantaged defendant.",
    full: "Parveen @ Kale came from a very poor background and was in dire need of money. When lured by one of his friends, he agreed to write the exams of Tier one and two for one of his friends. Parveen confessed his crime and agreed that he had written the test conducted by the IB Board and that he confessed the crime voluntarily and without any threat, inducement, coercion, or undue influence. We advised him to plea bargain in front of the court and he received no punishment seeing his circumstances."
  },
  {
    id: 7,
    title: "Suprem Bansal vs State",
    year: "Recent",
    court: "High Court",
    brief: "Marriage declared null and void; cancer patient coerced by caretaker for property.",
    full: "In this appalling case, my client's son, Rajeev Bansal who was a cancer patient, was deceitfully coerced into marriage by his caretaker, who later attempted to usurp all his property after his death. Given that Rajeev was in no condition to provide valid consent or make critical decisions, the Hon'ble Court rightfully declared the marriage null and void."
  },
  {
    id: 8,
    title: "CDR Estate and Private Limited & Anr. vs Shree Naurang Godavari Entertainment Limited and Ors",
    year: "Ongoing",
    court: "High Court",
    brief: "Legal proceedings against renowned film star for ₹20 crore fraud.",
    full: "We have also initiated legal proceedings against a renowned film star, who is accused of defrauding our client, CDR ESTATE AND PRIVATE LIMITED & ANR. of ₹20 crore."
  },
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

  const smoothScrollTo = (target: number) => {
  const container = scrollContainerRef.current;
  if (!container) return;

  const start = container.scrollLeft;
  const change = target - start;
  const duration = 450;
  let startTime: number | null = null;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = currentTime - startTime;
    const percent = Math.min(progress / duration, 1);

    container.scrollLeft = start + change * percent;

    if (percent < 1) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
};

  // Scroll to current index
  useEffect(() => {
  if (scrollContainerRef.current && expandedCard === null) {
    const cardElement = scrollContainerRef.current.querySelector('div > div');
    const cardWidth = cardElement ? cardElement.clientWidth + 24 : 370;

    smoothScrollTo(currentIndex * cardWidth);
  }
}, [currentIndex, expandedCard]);

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
