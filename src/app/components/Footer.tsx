'use client'

import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/gaurav-sharma-white.png"
              alt="GSLO Logo"
              width={270}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Office Address */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2 text-white/90">Office Address</h3>
            <p className="text-[13px] text-white/70 leading-relaxed">
              Plot No. 25, Fourth Floor, Thana Road, Near Chhawla Stand<br />
              Najafgarh, New Delhi - 110043<br />
              India
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold mb-2 text-white/90">Contact</h3>
            <a 
              href="tel:+919876543210" 
              className="text-[13px] text-white/70 hover:text-white transition-colors block mb-1"
            >
              +91 98765 43210
            </a>
            <a 
              href="mailto:contact@gslo.in" 
              className="text-[13px] text-white/70 hover:text-white transition-colors block"
            >
              info@gslo.in
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-6 pt-6">
          <p className="text-center text-[11px] text-white/50">
            © {new Date().getFullYear()} Gaurav Sharma Law Offices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
