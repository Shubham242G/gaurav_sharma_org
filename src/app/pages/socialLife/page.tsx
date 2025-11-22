'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SocialLife() {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null)

    const initiatives = [
        {
            name: "EqualAid",
            year: "2025",
            tagline: "Free Legal Aid for All",
            description: "Inspired by Article 39A of the Constitution, providing free legal aid to underprivileged people who cannot afford legal representation.",
            icon: "⚖️",
            principle: "Everyone has the right to be defended"
        },
        {
            name: "POSH Advocacy",
            year: "Ongoing",
            tagline: "Safe Workplaces for Women",
            description: "Proactively promoting awareness about Prevention of Sexual Harassment at Workplace Act, creating safe working environments.",
            icon: "👩‍💼",
            principle: "Safety and dignity at workplace"
        },
        {
            name: "False Case Advocacy",
            year: "2024",
            tagline: "Justice for the Falsely Accused",
            description: "Filed writ petition in Delhi High Court seeking compensation scheme for men framed in false rape cases after successful acquittal.",
            icon: "⚖️",
            principle: "Justice must work both ways"
        }
    ]

    const communityWork = [
        {
            title: "Tihar Central Jail Legal Aid",
            period: "College Years",
            description: "Part of Legal Aid Society, helping undertrials who couldn't afford legal representation. This experience shaped my vision for EqualAid.",
            impact: "First exposure to justice inequality"
        },
        {
            title: "NGO Partnerships",
            period: "College & Beyond",
            description: "Active participation in community events, workshops, and NGO collaborations to give back to society.",
            impact: "Building bridges between law and community"
        },
        {
            title: "Court Internship Revelation",
            period: "Internship Days",
            description: "Witnessed people in their most vulnerable state - mentally, emotionally, and financially. This became the turning point.",
            impact: "Birth of the EqualAid vision"
        }
    ]

    const coreValues = [
        "Giving back to the community",
        "Helping people in need",
        "Promoting gender equality",
        "Ensuring justice for all",
        "Fighting false accusations",
        "Creating awareness"
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner - 65vh with Hover Effect */}
            <section 
                className="relative h-[65vh] bg-black cursor-pointer"
                onMouseEnter={() => setHoveredImage('banner')}
                onMouseLeave={() => setHoveredImage(null)}
            >
                <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=800&fit=crop')`,
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
                            Social Impact
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[16px] md:text-[18px] opacity-80"
                        >
                            Beyond the Courtroom: Community, Activism & Change
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Value Introduction - White Section */}
            <section className="relative py-16 md:py-20 bg-white">
                <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block bg-black/5 px-6 py-2 rounded-full text-sm text-black/60 mb-6">
                            A Value Ingrained Since Childhood
                        </div>
                        <p className="text-[16px] md:text-[18px] text-black/80 leading-relaxed mb-6">
                            Coming from a household that has been helping people for ages, one value was ingrained into me as a child — <span className="text-black font-semibold">always giving back to my community and people</span>.
                        </p>
                        <p className="text-[15px] text-black/70 leading-relaxed">
                            Ever since my teenage years, I've been certain about one thing: helping people in need. This unwavering desire planted the seed that eventually grew into my dream of becoming a lawyer.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Journey - Black Section with Hover Image */}
            <section className="relative py-16 md:py-20 bg-black text-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[32px] md:text-[42px] font-normal mb-6">
                                The Awakening
                            </h2>
                            <div className="space-y-4 text-[15px] leading-relaxed text-white/80">
                                <p>
                                    I have always been very active in community events and activities since my college days. Be it working with NGOs or attending events and workshops, college was all about <span className="text-white font-medium">giving to the people and being around</span>.
                                </p>
                                <p className="border-l-4 border-white/30 pl-4 italic text-white/90">
                                    "I remember the times when we used to go to Tihar Central Jail in my college days, as I was part of the Legal Aid Society helping undertrials who couldn't afford legal help. Seeing their condition, it was the first time I thought of doing something related to legal aid."
                                </p>
                                <p>
                                    The conclusive moment came during my internship days. I remember going to court and seeing people in the most vulnerable zone — mentally, emotionally, and financially. That is when I was certain of establishing an <span className="text-white font-medium">inclusive setting for the vulnerable section of society</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right - Image with Hover Effect */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[480px] mr-10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                            onMouseEnter={() => setHoveredImage('awakening')}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div
                                className="absolute inset-0 transition-all duration-500"
                                style={{
                                    backgroundImage: `url('/assets/socialLife.jpeg')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    filter: hoveredImage === 'awakening'
                                        ? 'grayscale(0%)'
                                        : 'grayscale(100%)',
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white text-sm opacity-90 italic">
                                    "That's how my journey in law began — with a legal aid case as my first."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Community Work Timeline - White Section */}
            <section className="relative py-16 md:py-20 bg-white">
                <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[32px] md:text-[38px] font-normal text-black text-center mb-12"
                    >
                        Community Footprints
                    </motion.h2>

                    <div className="space-y-8">
                        {communityWork.map((work, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative pl-8 border-l-2 border-black/20"
                            >
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full"></div>
                                <div className="text-xs text-black/50 mb-1 font-medium">{work.period}</div>
                                <h3 className="text-xl font-semibold text-black mb-2">{work.title}</h3>
                                <p className="text-[15px] text-black/70 leading-relaxed mb-2">{work.description}</p>
                                <div className="inline-block bg-black/5 px-3 py-1 rounded-full text-xs text-black/60">
                                    {work.impact}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Major Initiatives - Black Section */}
            <section className="relative py-16 md:py-20 bg-black text-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-[32px] md:text-[42px] font-normal mb-4">
                            Social Justice Initiatives
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-white/70 max-w-2xl mx-auto">
                            From vision to action: Creating platforms and movements for systemic change
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {initiatives.map((initiative, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="border-2 border-white/20 rounded-2xl p-6 hover:border-white/60 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{initiative.icon}</div>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <h3 className="text-2xl font-semibold">{initiative.name}</h3>
                                    <span className="text-xs text-white/50">{initiative.year}</span>
                                </div>
                                <p className="text-sm text-white/60 mb-4 italic">{initiative.tagline}</p>
                                <p className="text-[14px] text-white/80 leading-relaxed mb-4">
                                    {initiative.description}
                                </p>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-white/70 italic">"{initiative.principle}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EqualAid Deep Dive - White Section */}
            <section className="relative py-16 md:py-20 bg-white">
                <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-2 border-black/10 rounded-2xl p-8 md:p-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-5xl">⚖️</div>
                            <div>
                                <h2 className="text-[28px] md:text-[36px] font-semibold text-black">EqualAid</h2>
                                <p className="text-sm text-black/60">Inspired by Article 39A of the Constitution</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-[15px] text-black/80 leading-relaxed">
                            <p>
                                After years of practice and specialization, I founded <span className="font-semibold text-black">"EqualAid"</span> - a platform to ensure free legal aid to people who are underprivileged and cannot afford it.
                            </p>
                            <p className="bg-black/5 p-4 rounded-lg italic">
                                Article 39A of the Constitution directs the state to provide free legal aid to underprivileged people. The sole aim of "EqualAid" is to offer free legal aid to maintain the principles of equality and justice that our constitution fosters.
                            </p>
                            <p>
                                <span className="font-semibold text-black">EqualAid works on the principle:</span> "Everyone has the right to be defended." My team and I aim to provide justice to the marginalized section seeking justice.
                            </p>
                            <p>
                                Different types of cases are currently being handled under EqualAid, and some cases have been <span className="font-semibold text-black">successfully resolved</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Women Empowerment - Black Section with Hover Image */}
            <section className="relative py-16 md:py-20 bg-black text-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image with Hover Effect */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 bg-black cursor-pointer"
                            onMouseEnter={() => setHoveredImage('women')}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img
                                src="/assets/femaleInfluence.jpeg"
                                alt="Women Influence"
                                className="absolute inset-0 w-full h-full object-contain rounded-2xl transition-all duration-500"
                                style={{ 
                                    filter: hoveredImage === 'women'
                                        ? 'grayscale(0%)'
                                        : 'grayscale(100%)'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[32px] md:text-[42px] font-normal mb-6">
                                Influenced by Women
                            </h2>
                            <div className="space-y-4 text-[15px] leading-relaxed text-white/80">
                                <p>
                                    I have been raised and influenced by the women in my life — be it my mother, sister, wife, and now my daughter. <span className="text-white font-medium">Women have always played a vital role in framing my life</span>.
                                </p>
                                <p>
                                    This is why I have always proactively promoted a <span className="text-white font-medium">safe working environment for female workers</span> by making the workforce aware of the Prevention of Sexual Harassment at Workplace Act.
                                </p>
                                <p className="bg-white/10 p-4 rounded-lg">
                                    Creating awareness isn't just about compliance—it's about fostering dignity, respect, and safety in every professional space.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recent Advocacy - White Section */}
            <section className="relative py-16 md:py-20 bg-white">
                <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-l-4 border-black pl-6"
                    >
                        <div className="text-xs text-black/50 mb-2 font-medium">Recent Landmark</div>
                        <h3 className="text-2xl font-semibold text-black mb-4">
                            Rishabh @ Gaurav Bhagat vs State
                        </h3>
                        <p className="text-[15px] text-black/80 leading-relaxed mb-4">
                            All three accused were <span className="font-semibold text-black">acquitted in a false rape case</span>. On behalf of my clients, I have now filed a writ petition before the Delhi High Court seeking a compensation scheme for "men" framed in false rape cases.
                        </p>
                        <div className="bg-black/5 p-4 rounded-lg">
                            <p className="text-[14px] text-black/70 italic">
                                Justice must work both ways. While we fight for victims, we must also protect the falsely accused.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Grid - Black Section */}
            <section className="relative py-16 md:py-20 bg-black text-white">
                <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[32px] md:text-[38px] font-normal text-center mb-10"
                    >
                        Guiding Principles
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="border border-white/20 p-4 rounded-xl text-center hover:bg-white/5 transition-all"
                            >
                                <p className="text-[14px] text-white/90">{value}</p>
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
                            "Being a lawyer, discussing issues like international relations, economy, and societal change—and acting upon them—have become crucial yet indispensable parts of my routine."
                        </p>
                        <button className="bg-black text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-black/90 transition-all shadow-lg">
                            Join the Movement
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
