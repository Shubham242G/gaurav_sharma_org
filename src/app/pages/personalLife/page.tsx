'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function PersonalLife() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  const familyMembers = [
    {
      name: "Dr. NK Sharma",
      relation: "Father",
      description: "A practising doctor (MBBS, MD) and my eternal support system, guiding me through life's decisions and helping establish Mednlaw with his healthcare expertise.",
      icon: "👨‍⚕️"
    },
    {
      name: "Late Dr. Bharti Sharma",
      relation: "Mother",
      description: "A professor who was home to me. Her values, emotional intelligence, and personality shaped who I am today. Her choice to never drink or smoke became mine too.",
      icon: "👩‍🏫"
    },
    {
      name: "Kaavya",
      relation: "Wife",
      description: "My soulmate who brought stability and happiness back into my life. Together we're building a beautiful family filled with love and understanding.",
      icon: "💝"
    },
    {
      name: "Pranay & Aahana",
      relation: "Children",
      description: "The lights of my life who remind me every day what I'm working towards—a better, more just world for their generation.",
      icon: "👦👧"
    }
  ]

  const values = [
    {
      title: "Leadership Through Love",
      source: "From Nanaji",
      description: "My grandfather Late Shri Bhagwat Dayal Sharma was the first CM of Haryana, later Governor of Madhya Pradesh and Orissa. People called him 'Panditji' with love and respect.",
      lesson: "Leadership is about offering love, respect, and care to others"
    },
    {
      title: "Emotional Intelligence",
      source: "From Mother",
      description: "Every ounce of emotional intelligence, personality traits, and hobbies I have—all copied and pasted from my mother. Her values guide my choices even today.",
      lesson: "Values are inherited through love and example"
    },
    {
      title: "Resilience & Growth",
      source: "From Life",
      description: "My previous marriage ended due to irreconcilable differences. That difficult time taught me to step into a better version of myself—more mature and stable.",
      lesson: "Challenges shape us into who we're meant to become"
    }
  ]

  const hobbies = [
    "Political Discourse & Analysis",
    "Healthcare Policy Research",
    "Family Time & Parenting",
    "Reading Constitutional Law",
    "Community Engagement",
    "Mentoring Young Lawyers"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - 65vh with Hover-to-Color Effect */}
      <section 
        className="relative h-[85vh] bg-black cursor-pointer"
        onMouseEnter={() => setHoveredImage('banner')}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundImage: `url('/assets/sir&pranay.jpg')`,
            backgroundPosition: 'center 35%',
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
              Personal Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] md:text-[18px] opacity-80"
            >
              Born: September 11, 1982 | Values, Family & Life Beyond the Robe
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
            className="text-center"
          >
            <p className="text-[16px] md:text-[18px] text-black/80 leading-relaxed mb-6">
              I was born on <span className="font-semibold text-black">11th September 1982</span>, the eldest child of Dr. NK Sharma, a practising doctor (MBBS, MD), and Late Dr. Bharti Sharma, a professor. My sister is also a doctor.
            </p>
            <div className="inline-block bg-black/5 px-6 py-3 rounded-lg">
              <p className="text-[15px] text-black/70 italic">
                Politics and Leadership flow in my DNA
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy - Black Section with Hover-to-Color Image */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center">
            {/* Left - Image with Hover Effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onMouseEnter={() => setHoveredImage('legacy')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
  className="absolute inset-0 transition-all duration-500"
  style={{
    backgroundImage: `url('/assets/bhagwatDayalSingh.jpeg')`,
    backgroundPosition: 'center top', // Changed from 'center'
    backgroundSize: 'cover',
    filter: hoveredImage === 'legacy' ? 'grayscale(0%)' : 'grayscale(100%)',
  }}
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl font-semibold mb-2">Late Shri Bhagwat Dayal Sharma</p>
                <p className="text-white/80 text-sm">First CM of Haryana | Governor MP & Orissa</p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[32px] md:text-[42px] font-normal mb-6">
                A Legacy of Leadership
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-white/80">
                <p>
                  My grandfather <span className="text-white font-medium">Late Shri Bhagwat Dayal Sharma</span> was the first Chief Minister of Haryana and later appointed as Governor of Madhya Pradesh and thereafter Orissa.
                </p>
                <p className="border-l-4 border-white/30 pl-4 italic text-white/90">
                  "The people used to popularly call him 'Panditji', to show their love and respect."
                </p>
                <p>
                  Seeing my Nana ji at a very early age, I understood <span className="text-white font-medium">leadership is all about offering love, respect, and care to others</span>. These values played a very major role in my life, and even today they stay with me.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[38px] font-normal text-black text-center mb-12"
          >
            Values That Shape Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-2 border-black/10 rounded-2xl p-6 hover:border-black transition-all duration-300"
              >
                <div className="text-xs text-black/50 mb-2 font-medium">{value.source}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-[14px] text-black/70 leading-relaxed mb-4">
                  {value.description}
                </p>
                <div className="pt-4 border-t border-black/10">
                  <p className="text-xs text-black/60 italic">"{value.lesson}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mother's Influence - Black Section */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-[32px] md:text-[42px] font-normal mb-6">
              My Mother, My Home
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-[15px] leading-relaxed text-white/80"
          >
            <p>
              My mother played a very important role in framing my personality—<span className="text-white font-medium">she was home to me</span>. At times I wonder, when it comes to personality or hobbies, God just copied my mother's traits and pasted them onto me.
            </p>
            <p className="bg-white/10 p-4 rounded-lg italic text-white/90">
              "Guess, you are just like your mother" is one of my favourite compliments. Her values are one of the reasons I never drank or smoked all my life.
            </p>
            <p className="text-center text-sm text-white/70">
              As quoted by my wife: <span className="italic">"That one ounce of emotional intelligence you have, you get from your mother."</span>
            </p>
            <p className="text-center pt-4">
              But it sinks my heart when I don't find her around me now. The values and love she gave me will be <span className="text-white font-medium">cherished all my life</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Family Grid - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[38px] font-normal text-black text-center mb-12"
          >
            My Circle of Strength
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {familyMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-black/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{member.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                    <p className="text-xs text-black/50 mb-3">{member.relation}</p>
                    <p className="text-[14px] text-black/70 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Father's Support - Black Section with Hover-to-Color Image */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[32px] md:text-[42px] font-normal mb-6">
                My Father, My Guide
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-white/80">
                <p>
                  My father has always been a <span className="text-white font-medium">support system</span>—be it walking me through the pros and cons of my conduct politely, or helping me educate about healthcare while establishing Mednlaw.
                </p>
                <p className="border-l-4 border-white/30 pl-4 italic text-white/90">
                  "I remember when I spoke to him about establishing Mednlaw, and him instantly coming up with more ideas to make it work and teaching me about the healthcare sector. I will be forever grateful for it."
                </p>
              </div>
            </motion.div>

            {/* Right - Image with Hover Effect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onMouseEnter={() => setHoveredImage('father')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  filter: hoveredImage === 'father' ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Growth - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-4 border-black pl-6"
          >
            <h3 className="text-2xl font-semibold text-black mb-4">Growth Through Challenges</h3>
            <p className="text-[15px] text-black/80 leading-relaxed mb-4">
              I have been married previously, but due to irreconcilable differences, the marriage was legally dissolved. That was indeed a <span className="font-medium text-black">difficult time for me</span>, but slowly I stepped into a better version of myself leading to a more mature and stable me.
            </p>
            <p className="text-[15px] text-black/80 leading-relaxed">
              After which, I found my soulmate <span className="font-medium text-black">Kaavya</span> and now I am <span className="font-medium text-black">happily living with her and my kids, Pranay and Aahana</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hobbies & Interests - Black Section */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[38px] font-normal text-center mb-10"
          >
            Beyond the Courtroom
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hobbies.map((hobby, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-white/20 p-4 rounded-xl text-center hover:bg-white/5 transition-all"
              >
                <p className="text-[14px] text-white/90">{hobby}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote - White Section */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[20px] md:text-[24px] text-black/80 leading-relaxed italic mb-8">
              "From a legacy of leadership to building my own family—every experience, every person, every value has shaped the lawyer and human I am today."
            </p>
            <div className="inline-block bg-black/5 px-6 py-3 rounded-full">
              <p className="text-sm text-black/70">
                11 September 1982 | Father | Husband | Lawyer | Changemaker
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
