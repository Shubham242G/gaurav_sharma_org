'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      tagline: "Because when it comes to family, every moment matters",
      description: "I personally handle family law cases with the aim of ensuring my clients don't have to bear the stress or uncertainty of the legal process. With nearly 52 million pending family law cases in Indian courts, I strive to provide swift, empathetic, and effective legal solutions.",
      details: "Family law covers matters such as divorce, child custody, child support, adoption, domestic violence, and property division. These laws form the foundation for resolving some of the most sensitive and life-changing issues people face.",
      stat: "52M+ cases pending in India"
    },
    {
      title: "Healthcare Law",
      icon: "🏥",
      tagline: "Protecting healers, ensuring compliance",
      description: "Mednlaw is all about healthcare law. This boutique law firm makes it easy for healthcare facilities to comply with laws and work smoothly. From protecting doctors from medical negligence claims to safeguarding radiology centers from PCPNDT Compliance—I DO IT ALL!",
      details: "Hailing from a family of doctors, seeing them worried about such claims used to bug me. Mednlaw has worked with names like Biofoot, Antara (Max Company), National MRI Center, and has helped organizations save themselves from claims while functioning smoothly.",
      stat: "100% compliance success rate"
    },
    {
      title: "Writ Litigation",
      icon: "⚖️",
      tagline: "Swift justice when fundamental rights are at stake",
      description: "As a lawyer, writ litigation is one of the most empowering tools in my practice. It allows me to approach the High Courts or the Supreme Court directly when a client's fundamental rights are at stake.",
      details: "Whether it's filing a habeas corpus to secure someone's liberty, a mandamus to compel a public authority to act, or a certiorari to quash unlawful orders, writs cut through procedural delays. For me, it's not just a legal strategy—it's a way to protect rights when every moment counts.",
      stat: "Direct SC/HC access"
    },
    {
      title: "Criminal Litigation",
      icon: "🛡️",
      tagline: "Upholding fairness and due process",
      description: "Driven by a deep interest in criminal litigation, I pursued and completed my LLM with specialization in Criminal Laws. I handle every stage—from advising clients after an FIR is filed, to drafting anticipatory bail, to conducting bail hearings, trial proceedings, and appeals.",
      details: "My role is to ensure that their rights are protected, the evidence is examined thoroughly, and the law is applied fairly. I deal with matters ranging from minor offenses to serious crimes, always aiming to secure justice.",
      stat: "LLM Criminal Law specialization"
    },
    {
      title: "Supreme Court Practice",
      icon: "🏛️",
      tagline: "Shaping jurisprudence at the highest level",
      description: "Practicing in the Supreme Court is both a privilege and a responsibility. Every case I handle here demands meticulous preparation, deep legal research, and a strategic approach, as each matter has the potential to shape precedent.",
      details: "From drafting Special Leave Petitions to arguing before the bench, I navigate complex constitutional issues, statutory interpretations, and questions of national importance. For me, Supreme Court practice isn't just litigation—it's the art of blending law, logic, and persuasion.",
      stat: "Precedent-setting cases"
    },
    {
      title: "Hospitality Law",
      icon: "🏨",
      tagline: "Where customer service meets legal compliance",
      description: "Hospitality law covers the legal aspects of running hotels, restaurants, resorts, and other service-based businesses. As a lawyer, I see it as the rulebook that protects both guests and owners.",
      details: "It deals with contracts, licensing, food safety, employee rights, and even guest privacy. Issues like property damage, discrimination, or negligence can quickly escalate if not handled legally. For me, hospitality law is about creating a safe, fair, and smooth experience for everyone involved.",
      stat: "Complete business protection"
    },
    {
      title: "Consumer Law",
      icon: "🛒",
      tagline: "Creating a balanced and ethical marketplace",
      description: "Being a consumer, I understand the pain of being scammed by sellers. Consumer law is designed to protect buyers from unfair trade practices, defective goods, and deficient services.",
      details: "In India, the Consumer Protection Act, 2019 governs these rights, offering remedies like replacement, refund, or compensation. It empowers people to stand up against fraud and malpractice while encouraging fair competition in the market.",
      stat: "Consumer Protection Act 2019"
    },
    {
      title: "Property Law",
      icon: "🏠",
      tagline: "Safeguarding dreams, investments, and legacies",
      description: "As a lawyer, I see Property Law as more than just ownership rights—it's about clarity, protection, and peace of mind. Property Law governs how we buy, sell, use, and transfer land or buildings.",
      details: "I help clients navigate complex issues like title disputes, transfers, leases, and inheritance. For me, it's not just paperwork—it's safeguarding dreams, investments, and sometimes even family legacies.",
      stat: "Protecting family legacies"
    },
    {
      title: "Labour Law",
      icon: "👷",
      tagline: "The backbone of industrial harmony",
      description: "Labour Law is the set of rules and regulations that governs the relationship between employers and employees. It ensures fair treatment, safe working conditions, and the protection of workers' rights.",
      details: "This law covers aspects like wages, working hours, leave policies, workplace safety, dispute resolution, and social security benefits. In today's evolving work culture, understanding and applying Labour Law is essential for a fair and just workplace.",
      stat: "Fair workplace guaranteed"
    },
    {
      title: "Intellectual Property",
      icon: "💡",
      tagline: "Empowering creators to own their genius",
      description: "As a lawyer, I see Intellectual Property (IP) as more than just legal jargon—it's the protection of ideas, creativity, and innovation. Whether it's a brand logo, a novel, an invention, or a unique design, IP ensures that the creator's rights are respected and rewarded.",
      details: "I work to safeguard these intangible assets, preventing unauthorized use and securing fair recognition. In today's world, where ideas travel faster than ever, IP law is essential to maintain originality and foster innovation.",
      stat: "Protecting innovation"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - 40vh */}
      <section className="relative h-[65vh] bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=800&fit=crop')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'grayscale(100%) brightness(0.4)',
          }}
        ></div>

        <div className="relative z-10 h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-normal tracking-tight mb-4"
            >
              Practice Areas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] md:text-[18px] opacity-80"
            >
              Comprehensive Legal Expertise Across Multiple Domains
            </motion.p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-[14px] md:text-[16px] text-black/70 max-w-2xl mx-auto">
              From constitutional matters to consumer protection, each practice area represents years of dedication, expertise, and commitment to justice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                className="border-2 border-black/10 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-xl group"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{area.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-black mb-1 group-hover:text-black/80 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-black/50 italic">{area.tagline}</p>
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-[15px] text-black/80 leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Details */}
                <p className="text-[14px] text-black/70 leading-relaxed mb-4 border-l-4 border-black/20 pl-4">
                  {area.details}
                </p>

                {/* Stat Badge */}
                <div className="inline-block bg-black/5 px-4 py-2 rounded-full text-xs text-black/60 font-medium">
                  {area.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlight - Black Section */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-[32px] md:text-[38px] font-normal mb-6">
              Recent Legal Initiative
            </h2>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">⚖️</div>
                <h3 className="text-xl font-semibold">Delhi High Court Writ Petition</h3>
              </div>
              <p className="text-[15px] text-white/80 leading-relaxed">
                Recently, we are fighting a writ petition before Delhi High Court seeking a <span className="text-white font-medium">compensation scheme for "men" framed in false rape cases</span>, in hope of getting better protection laws for men.
              </p>
              <div className="mt-4 inline-block bg-white/10 px-4 py-2 rounded-full text-xs">
                Pending before Delhi HC
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[28px] md:text-[36px] font-normal text-black mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-[15px] text-black/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you're facing a family dispute, need healthcare compliance support, or require representation in the Supreme Court—I'm here to help with expertise and dedication.
            </p>
            <button className="bg-black text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-black/90 transition-all shadow-lg">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
