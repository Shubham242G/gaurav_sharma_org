'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-0 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-200 peer"
            placeholder="Full Name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white/60 peer-focus:text-sm"
          >
            Full Name *
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-0 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-200 peer"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white/60 peer-focus:text-sm"
          >
            Email Address *
          </label>
        </div>
      </div>

      {/* Phone and Subject Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Phone */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-0 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-200 peer"
            placeholder="Phone"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white/60 peer-focus:text-sm"
          >
            Phone Number
          </label>
        </div>

        {/* Subject */}
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-0 py-3 bg-transparent border-b-2 border-white/30 text-white focus:outline-none focus:border-white transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-black">Select legal matter</option>
            <option value="constitutional" className="bg-black">Constitutional Law</option>
            <option value="criminal" className="bg-black">Criminal Defense</option>
            <option value="civil" className="bg-black">Civil Rights</option>
            <option value="corporate" className="bg-black">Corporate Law</option>
            <option value="family" className="bg-black">Family Law</option>
            <option value="property" className="bg-black">Property Law</option>
            <option value="other" className="bg-black">Other</option>
          </select>
          <label
            htmlFor="subject"
            className="absolute left-0 -top-3.5 text-white/60 text-sm"
          >
            Legal Matter *
          </label>
          <div className="absolute right-0 top-3 pointer-events-none text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-0 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-transparent focus:outline-none focus:border-white transition-all duration-200 resize-none peer"
          placeholder="Message"
        />
        <label
          htmlFor="message"
          className="absolute left-0 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white/60 peer-focus:text-sm"
        >
          Message *
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-white text-black px-10 py-3.5 rounded-full text-[15px] font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </>
          )}
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span className="text-sm font-medium">Sent successfully!</span>
          </motion.div>
        )}
      </div>
    </form>
  )
}
