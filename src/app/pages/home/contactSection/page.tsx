'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../../../components/ContactForm'

export default function ContactSection() {
  return (
    <section id='contactSection' className="relative py-16 md:py-20 bg-black">
      <div className="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] font-normal text-white tracking-tight mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] md:text-[15px] text-white/50 leading-relaxed max-w-xl mx-auto"
          >
            Schedule a consultation to discuss your legal matter
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
        </motion.div>
      </div>
    </section>
  )
}
