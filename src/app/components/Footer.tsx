'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0e27] text-white py-16">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-[24px] font-semibold mb-6">Be.Guardit</h3>
            <p className="text-[14px] opacity-70 leading-relaxed mb-6">
              Your trusted partner in digital transformation and IT solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <span className="text-sm">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <span className="text-sm">fb</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[16px] font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Cloud Solutions</a></li>
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Cybersecurity</a></li>
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Data Analytics</a></li>
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">IT Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[16px] font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[16px] font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-[14px] opacity-70">info@beguardit.com</li>
              <li className="text-[14px] opacity-70">+1 (555) 123-4567</li>
              <li className="text-[14px] opacity-70">123 Tech Street<br/>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] opacity-70">
            © 2025 Be.Guardit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-[14px] opacity-70 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
