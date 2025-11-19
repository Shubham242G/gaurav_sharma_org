'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Wix Studio Logo */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-[15px] font-semibold tracking-tight">
                WIX STUDIO
              </span>
            </div>
          </div>

          {/* Edit Template Button */}
          <button className="hidden md:block bg-[#5b5ff5] hover:bg-[#4a4ed5] text-white px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200">
            Edit Template
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
