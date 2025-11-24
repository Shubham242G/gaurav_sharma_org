'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function PracticeAreas() {
  const router = useRouter()

  // Navigation function to contact section
  const handleNavigateToContact = () => {
    // Navigate to home page
    router.push('/')
    
    // Scroll to contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contactSection')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  const practiceAreas = [
    {
      title: "Family Law",
      tagline: "Because when it comes to family, every moment matters",
      description: "I personally handle family law cases with the aim of ensuring my clients don't have to bear the stress or uncertainty of the legal process. With nearly 52 million pending family law cases in Indian courts, I strive to provide swift, empathetic, and effective legal solutions.",
      details: "Family law covers matters such as divorce, child custody, child support, adoption, domestic violence, and property division. These laws form the foundation for resolving some of the most sensitive and life-changing issues people face.",
      stat: "52M+ cases pending in India"
    },
    {
      title: "Healthcare Law",
      tagline: "Protecting healers, ensuring compliance",
      description: "Mednlaw is all about healthcare law. This boutique law firm makes it easy for healthcare facilities to comply with laws and work smoothly. From protecting doctors from medical negligence claims to safeguarding radiology centers from PCPNDT Compliance—I DO IT ALL!",
      details: "Hailing from a family of doctors, seeing them worried about such claims used to bug me. Mednlaw has worked with names like Biofoot, Antara (Max Company), National MRI Center, and has helped organizations save themselves from claims while functioning smoothly.",
      stat: "100% compliance success rate"
    },
    {
      title: "Writ Litigation",
      tagline: "Swift justice when fundamental rights are at stake",
      description: "As a lawyer, writ litigation is one of the most empowering tools in my practice. It allows me to approach the High Courts or the Supreme Court directly when a client's fundamental rights are at stake.",
      details: "Whether it's filing a habeas corpus to secure someone's liberty, a mandamus to compel a public authority to act, or a certiorari to quash unlawful orders, writs cut through procedural delays. For me, it's not just a legal strategy—it's a way to protect rights when every moment counts.",
      stat: "Direct SC/HC access"
    },
    {
      title: "Criminal Litigation",
      tagline: "Upholding fairness and due process",
      description: "Driven by a deep interest in criminal litigation, I pursued and completed my LLM with specialization in Criminal Laws. I handle every stage—from advising clients after an FIR is filed, to drafting anticipatory bail, to conducting bail hearings, trial proceedings, and appeals.",
      details: "My role is to ensure that their rights are protected, the evidence is examined thoroughly, and the law is applied fairly. I deal with matters ranging from minor offenses to serious crimes, always aiming to secure justice.",
      stat: "LLM Criminal Law specialization"
    },
    {
      title: "Supreme Court Practice",
      tagline: "Shaping jurisprudence at the highest level",
      description: "Practicing in the Supreme Court is both a privilege and a responsibility. Every case I handle here demands meticulous preparation, deep legal research, and a strategic approach, as each matter has the potential to shape precedent.",
      details: "From drafting Special Leave Petitions to arguing before the bench, I navigate complex constitutional issues, statutory interpretations, and questions of national importance. For me, Supreme Court practice isn't just litigation—it's the art of blending law, logic, and persuasion.",
      stat: "Precedent-setting cases"
    },
    {
      title: "Hospitality Law",
      tagline: "Where customer service meets legal compliance",
      description: "Hospitality law covers the legal aspects of running hotels, restaurants, resorts, and other service-based businesses. As a lawyer, I see it as the rulebook that protects both guests and owners.",
      details: "It deals with contracts, licensing, food safety, employee rights, and even guest privacy. Issues like property damage, discrimination, or negligence can quickly escalate if not handled legally. For me, hospitality law is about creating a safe, fair, and smooth experience for everyone involved.",
      stat: "Complete business protection"
    },
    {
      title: "Consumer Law",
      tagline: "Creating a balanced and ethical marketplace",
      description: "Being a consumer, I understand the pain of being scammed by sellers. Consumer law is designed to protect buyers from unfair trade practices, defective goods, and deficient services.",
      details: "In India, the Consumer Protection Act, 2019 governs these rights, offering remedies like replacement, refund, or compensation. It empowers people to stand up against fraud and malpractice while encouraging fair competition in the market.",
      stat: "Consumer Protection Act 2019"
    },
    {
      title: "Property Law",
      tagline: "Safeguarding dreams, investments, and legacies",
      description: "As a lawyer, I see Property Law as more than just ownership rights—it's about clarity, protection, and peace of mind. Property Law governs how we buy, sell, use, and transfer land or buildings.",
      details: "I help clients navigate complex issues like title disputes, transfers, leases, and inheritance. For me, it's not just paperwork—it's safeguarding dreams, investments, and sometimes even family legacies.",
      stat: "Protecting family legacies"
    },
    {
      title: "Labour Law",
      tagline: "The backbone of industrial harmony",
      description: "Labour Law is the set of rules and regulations that governs the relationship between employers and employees. It ensures fair treatment, safe working conditions, and the protection of workers' rights.",
      details: "This law covers aspects like wages, working hours, leave policies, workplace safety, dispute resolution, and social security benefits. In today's evolving work culture, understanding and applying Labour Law is essential for a fair and just workplace.",
      stat: "Fair workplace guaranteed"
    },
    {
      title: "Intellectual Property",
      tagline: "Empowering creators to own their genius",
      description: "As a lawyer, I see Intellectual Property (IP) as more than just legal jargon—it's the protection of ideas, creativity, and innovation. Whether it's a brand logo, a novel, an invention, or a unique design, IP ensures that the creator's rights are respected and rewarded.",
      details: "I work to safeguard these intangible assets, preventing unauthorized use and securing fair recognition. In today's world, where ideas travel faster than ever, IP law is essential to maintain originality and foster innovation.",
      stat: "Protecting innovation"
    }
  ]

  return (
    <div 
      className="min-h-screen bg-white relative"
      style={{
        backgroundImage: `url('/assets/nclt.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Light black overlay on background */}
      <div className="fixed inset-0 bg-black/15 z-0"></div>

      {/* Content Container - Positioned above background */}
      <div className="relative z-10">
        {/* Hero Header - Clean & Professional */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              
              <h1 className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] font-light tracking-tight text-white mb-6">
                Practice Areas
              </h1>
              <p className="text-[16px] md:text-[18px] text-white leading-relaxed max-w-2xl mx-auto">
                Comprehensive Legal Expertise Across Multiple Domains
              </p>
            </motion.div>
          </div>
        </section>

        {/* Practice Areas Grid - Elegant Cards */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-[14px] md:text-[16px] text-white max-w-2xl mx-auto">
                From constitutional matters to consumer protection, each practice area represents years of dedication, expertise, and commitment to justice.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practiceAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                  className="group relative bg-white/95 backdrop-blur-sm border border-black/10 rounded-xl p-8 hover:border-black/30 transition-all duration-300 hover:shadow-2xl hover:bg-white"
                >
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-8 w-12 h-1 bg-black/20 group-hover:bg-black transition-all duration-300"></div>
                  
                  {/* Title and Tagline */}
                  <div className="mb-6 mt-4">
                    <h3 className="text-[24px] font-semibold text-black mb-2 group-hover:text-black/80 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-[13px] text-black/50 italic font-light">
                      {area.tagline}
                    </p>
                  </div>

                  {/* Main Description */}
                  <p className="text-[15px] text-black/75 leading-relaxed mb-5">
                    {area.description}
                  </p>

                  {/* Details with left accent */}
                  <div className="relative pl-4 mb-5">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/15"></div>
                    <p className="text-[14px] text-black/65 leading-relaxed">
                      {area.details}
                    </p>
                  </div>

                  {/* Stat Badge - Minimal Design */}
                  <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
                    <span className="text-[12px] text-black/60 font-medium tracking-wide">
                      {area.stat}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Highlight - Elegant Black Section */}
        <section className="relative py-20 md:py-24 bg-black">
          <div className="max-w-[1100px] mx-auto px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-10">
                <div className="h-[1px] w-16 bg-white/30 mx-auto mb-8"></div>
                <h2 className="text-[36px] md:text-[42px] font-light text-white mb-4">
                  Recent Legal Initiative
                </h2>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] font-semibold text-white mb-3">
                      Delhi High Court Writ Petition
                    </h3>
                    <p className="text-[15px] text-white/75 leading-relaxed mb-4">
                      Recently, we are fighting a writ petition before Delhi High Court seeking a <span className="text-white font-medium">compensation scheme for "men" framed in false rape cases</span>, in hope of getting better protection laws for men.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
                      <span className="text-[12px] text-white/70 tracking-wide">Pending before Delhi HC</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA - Clean White Section */}
        <section className="relative py-20 md:py-24">
          <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-[1px] w-16 bg-black/20 mx-auto mb-8"></div>
              <h2 className="text-[36px] md:text-[44px] font-light text-white mb-6">
                Need Legal Assistance?
              </h2>
              <p className="text-[15px] text-white leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you're facing a family dispute, need healthcare compliance support, or require representation in the Supreme Court—I'm here to help with expertise and dedication.
              </p>
              <button 
                onClick={handleNavigateToContact}
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-md text-[15px] font-medium hover:bg-black/90 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Schedule a Consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
