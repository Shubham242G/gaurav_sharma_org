'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ProfessionalLife() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
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

  const milestones = [
    {
      year: "Early Years",
      title: "Foundation of Values",
      content: "With my father Dr. NK Sharma, a practising Doctor (MBBS, MD) and my mother, Late Dr. Bharti Sharma, a Professor, education became an integral value flowing through my family."
    },
    {
      year: "School Years",
      title: "Ramjas School, Delhi",
      content: "Served as Discipline Incharge, completed advanced mountaineering and trekking course, and was honored with the Lt. Governor's Scout Honor in Class 12th."
    },
    {
      year: "University",
      title: "Delhi University",
      content: "Completed Economic Honours followed by LLB from Delhi University - the turning point that made me both book smart and street smart."
    },
    {
      year: "2010",
      title: "Gaurav Sharma Law Offices",
      content: "After working under Advocate Kanwal Chaudhary and co-founding Sharma and Chowksey Law Offices, established GSLO to provide comprehensive legal services."
    }
  ]

  const ventures = [
    {
      name: "Gaurav Sharma Law Offices (GSLO)",
      year: "2010",
      tagline: "Comprehensive Legal Solutions",
      description: "A full-service law firm providing comprehensive legal representation across multiple practice areas including constitutional law, criminal defense, family law, corporate litigation, and more. GSLO is built on principles of excellence, integrity, and client-focused service.",
      logo: "/assets/gslo-white.png",
      logoWidth: 85,
      logoHeight: 80,
      containerHeight: "h-20",
      url: "https://www.gslo.in/"
    },
    {
      name: "Mednlaw",
      year: "2010",
      tagline: "Healthcare Compliance & Protection",
      description: "A boutique healthcare compliance firm safeguarding doctors, radiologists, and healthcare professionals from false medical negligence and PCPNDT Compliance claims. First firm to procure license for mobile ultrasound clinic.",
      logo: "/assets/medNlaw.png",
      logoWidth: 160,
      logoHeight: 80,
      containerHeight: "h-20",
      url: "https://mednlaw.com"
    },
    {
      name: "Unsaathi",
      year: "2020",
      tagline: "Mediation in Matrimonial Disputes",
      description: "A platform promoting mediation and amicable settlement in matrimonial disputes, helping clients cope with divorce stress legally and emotionally. 'Moving Forward, Together or Apart.'",
      logo: "/assets/Unsaathi-logo2.png",
      logoWidth: 180,
      logoHeight: 80,
      containerHeight: "h-20",
      url: "https://www.unsaathi.com/"
    },
    {
      name: "EqualAid",
      year: "2025",
      tagline: "Legal Aid for All",
      description: "A non-profit initiative offering legal aid to those who need it, ensuring every individual can enjoy the values of justice and equality regardless of financial constraints.",
      logo: "/assets/equal-aid.png",
      logoWidth: 180,
      logoHeight: 80,
      containerHeight: "h-20",
      url: ""
    }
  ]

  const achievements = [
    "Lt. Governor's Scout Honor",
    "Discipline Incharge, Ramjas School",
    "Advanced Mountaineering & Trekking Certification",
    "Healthcare Management, IIM Calcutta (2023)",
    "Masters in Criminal Law",
    "First Mobile Ultrasound Clinic License"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - 85vh with Hover Effect */}
      <section 
        className="relative h-[85vh] bg-black cursor-pointer"
        onMouseEnter={() => setHoveredImage('banner')}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundImage: `url('/assets/professionalSir.JPG')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: hoveredImage === 'banner'
              ? 'grayscale(0%) brightness(0.6)'
              : 'grayscale(100%) brightness(0.4)',
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
              Professional Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] md:text-[18px] opacity-80"
            >
              From Values to Vision: The Making of a Legal Professional
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-[16px] md:text-[18px] text-black/80 leading-relaxed">
              Education has always been a very integral value that flows in my family. My father Dr. NK Sharma, a practising Doctor (MBBS, MD) and my mother, Late Dr. Bharti Sharma, a Professor — this was the first learning I received from them.
            </p>
          </motion.div>

          {/* Timeline Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-black/20"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full"></div>
                <div className="text-xs text-black/50 mb-1 font-medium">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-black mb-2">{milestone.title}</h3>
                <p className="text-[15px] text-black/70 leading-relaxed">{milestone.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Turning Point - Black Section with Hover Image */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[32px] md:text-[42px] font-normal mb-6">
                The Turning Point
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-white/80">
                <p>
                  I did my schooling from Ramjas School, Delhi, which was the first step not just towards knowledge but also towards leadership and better individuality. School disciplined me in the most righteous way.
                </p>
                <p>
                  During my school years, I served as the <span className="text-white font-medium">Discipline Incharge</span>, and was fortunate to undertake an advanced course in mountaineering and trekking.
                </p>
                <p className="italic">
                  "I still remember walking home in Class 12th, beaming with pride about being awarded the Lt. Governor's Scout Honor. These memories still make me smile from ear to ear."
                </p>
                <p>
                  My LLB journey from Delhi University didn't just fill my mind with knowledge—it sharpened my instincts and made me both <span className="text-white font-medium">book smart and street smart</span>.
                </p>
              </div>
            </motion.div>

            {/* Right - Image with Hover Effect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer mr-10"
              onMouseEnter={() => setHoveredImage('turning-point')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  backgroundImage: `url('/assets/professional3.JPG')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  filter: hoveredImage === 'turning-point'
                    ? 'grayscale(0%)'
                    : 'grayscale(100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Career - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[32px] md:text-[38px] font-normal text-black mb-6 text-center">
              Building the Foundation
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-black/80">
              <p>
                After my LLB, I worked under <span className="text-black font-medium">Advocate Kanwal Chaudhary</span>. This experience played a major role in shaping my skills as a lawyer, from improving my drafting skills to giving me the confidence of presenting my case in front of the court.
              </p>
              <p>
                My friend Gunjan and I started a law firm named <span className="text-black font-medium">Sharma and Chowksey Law Offices</span>. Later, Gunjan moved to Bhopal after her marriage and I established the foundation of <span className="text-black font-medium">Gaurav Sharma Law Offices in 2010</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventures - Black Section with Horizontal Scroll */}
      <section className="relative py-16 md:py-20 bg-black text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] md:text-[42px] font-normal mb-4">
              Pioneering Legal Ventures
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-2xl mx-auto">
              Identifying gaps in the legal ecosystem and creating specialized solutions
            </p>
          </motion.div>

          {/* Horizontal Scrollable Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {ventures.map((venture, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => window.open(venture.url, '_blank')}
                  className="flex-shrink-0 w-[340px] border border-white/20 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 snap-start cursor-pointer"
                >
                  {/* Fixed logo container with consistent alignment */}
                  <div className={`${venture.containerHeight} w-full mb-4 flex items-center justify-start`}>
                    <Image
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      width={venture.logoWidth}
                      height={venture.logoHeight}
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-2xl font-semibold">{venture.name}</h3>
                    <span className="text-xs text-white/50">{venture.year}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-3 italic">{venture.tagline}</p>
                  <p className="text-[14px] text-white/80 leading-relaxed">
                    {venture.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <p className="text-xs text-white/40">← Scroll to explore more →</p>
            </div>
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-hide::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }
          .scrollbar-hide::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
          .scrollbar-hide::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </section>

      {/* Detailed Ventures Story - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-8">
            {/* Mednlaw Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-black pl-6"
            >
              <h3 className="text-xl font-semibold text-black mb-3">The Birth of Mednlaw</h3>
              <p className="text-[15px] text-black/80 leading-relaxed mb-3">
                As you all know, my father is a Doctor. I used to hear his friends facing numerous false medical negligence cases, that is when the concept of Mednlaw came to my mind.
              </p>
              <p className="text-[15px] text-black/80 leading-relaxed">
                Mednlaw has safeguarded several healthcare institutions and professionals to date. We are the <span className="font-medium text-black">only firm to have procured a license for a mobile ultrasound clinic</span>, making it easier for old and bed-ridden people to get ultrasound done at their doorstep.
              </p>
              <p className="text-[14px] text-black/60 mt-3">
                To understand the healthcare sector better, I studied Healthcare Management at IIM Calcutta in 2023.
              </p>
            </motion.div>

            {/* Unsaathi Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-black pl-6"
            >
              <h3 className="text-xl font-semibold text-black mb-3">Understanding Pain: Unsaathi</h3>
              <p className="text-[15px] text-black/80 leading-relaxed mb-3">
                Seeing the chaos and emotional distress during divorces always disturbed my peace of mind. Being someone who has been through a divorce, I personally understand the pain and stress an individual goes through.
              </p>
              <p className="text-[15px] text-black/80 leading-relaxed">
                This gave birth to <span className="font-medium text-black">Unsaathi</span> - helping clients cope with divorce stress, legally and emotionally. We help our clients see a silver lining and scope of better future.
              </p>
              <p className="text-[14px] text-black/60 italic mt-3">
                'Moving Forward, Together or Apart.'
              </p>
            </motion.div>

            {/* EqualAid Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-black pl-6"
            >
              <h3 className="text-xl font-semibold text-black mb-3">Justice for All: EqualAid</h3>
              <p className="text-[15px] text-black/80 leading-relaxed mb-3">
                Since college, when I used to go to Central Jail as part of the legal aid community, seeing the vulnerability of people with respect to finances during trial used to make my heart sink.
              </p>
              <p className="text-[15px] text-black/80 leading-relaxed">
                This led to establishing <span className="font-medium text-black">EqualAid in 2025</span> - a non-profit offering legal aid to those who need it, ensuring every individual can enjoy the values of justice and equality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Grid - Black Section */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[38px] font-normal text-center mb-10"
          >
            Honors & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-3 border border-white/20 p-4 rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="text-xl">✓</div>
                <p className="text-[14px] text-white/90">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuing Education - White Section with Hover Image */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with Hover Effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredImage('education')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  backgroundImage: `url('/assets/professional2.JPG')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  filter: hoveredImage === 'education'
                    ? 'grayscale(0%)'
                    : 'grayscale(100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[32px] md:text-[38px] font-normal text-black mb-6">
                Lifelong Learning
              </h2>
              <p className="text-[15px] text-black/80 leading-relaxed mb-4">
                I have always had a keen interest in criminal laws and increasing criminal cases motivated me to pursue <span className="font-medium text-black">Masters in Criminal Law</span>.
              </p>
              <p className="text-[15px] text-black/80 leading-relaxed">
                My journey to <span className="font-medium text-black">IIM Calcutta for Healthcare Management in 2023</span> reflects my commitment to understanding every facet of the sectors I serve, ensuring I provide not just legal expertise but industry-specific insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Quote - Black Section with CTA Button */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[20px] md:text-[24px] leading-relaxed italic mb-6">
              "From the values instilled by my parents to the ventures built from personal experiences - every step has been a commitment to making justice accessible, compassionate, and effective."
            </p>
            <button 
              onClick={handleNavigateToContact}
              className="bg-white text-black px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-white/90 transition-all shadow-lg"
            >
              Let's Work Together
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
