'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted')
    if (!hasAccepted) {
      setIsOpen(true)
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const handleProceed = () => {
    if (isChecked) {
      localStorage.setItem('disclaimerAccepted', 'true')
      setIsOpen(false)
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={(e) => e.preventDefault()}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-8 py-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Disclaimer
                </h2>
              </div>

              {/* Content */}
              <div className="px-8 py-6 overflow-y-auto max-h-[60vh]">
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="text-justify">
                    The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.gauravsharma.org, you acknowledge and confirm that you are seeking information relating to Gaurav Sharma of your own accord and that there has been no form of solicitation, advertisement or inducement by Gaurav Sharma or its members.
                  </p>
                  
                  <p className="text-justify">
                    The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Gaurav Sharma shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
                  </p>
                  
                  <p className="text-justify">
                    The contents of this website are the intellectual property of Gaurav Sharma.
                  </p>
                </div>

                {/* Checkbox */}
                <div className="mt-8 flex items-start gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="accept-disclaimer"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="w-5 h-5 rounded border-2 border-gray-400 text-gray-800 
                               focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                               cursor-pointer transition-all"
                    />
                  </div>
                  <label 
                    htmlFor="accept-disclaimer" 
                    className="text-gray-700 text-sm cursor-pointer select-none"
                  >
                    I accept the above.
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-8 py-5 flex justify-end">
                <button
                  onClick={handleProceed}
                  disabled={!isChecked}
                  className={`
                    px-8 py-2.5 rounded font-medium text-sm uppercase tracking-wide
                    transition-all duration-200
                    ${isChecked 
                      ? 'bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg cursor-pointer' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  PROCEED TO WEBSITE
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
