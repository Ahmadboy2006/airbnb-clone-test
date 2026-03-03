import React from 'react'
import FooterTabs from './footerTabs'
import { footerData } from '../data/data'
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      
      <FooterTabs />

      <div className="max-w-400 mx-auto bg-[#F7F7F7] px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-200 pb-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[15px] text-[#222222]">Support</h3>
            <div className="flex flex-col items-start gap-3">
              {footerData.support.map((item, index) => (
                <a key={index} href="#" className="text-[15px] hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[15px] text-[#222222]">Hosting</h3>
            <div className="flex flex-col items-start gap-3">
              {footerData.hosting.map((item, index) => (
                <a key={index} href="#" className="text-[15px] hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[15px] text-[#222222]">Airbnb</h3>
            <div className="flex flex-col items-start gap-3">
              {footerData.airbnb.map((item, index) => (
                <a key={index} href="#" className="text-[15px] hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#222222]">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe size={18} />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>$</span>
              <span>USD</span>
            </div>
            <div className="hidden md:flex gap-4">
              <Facebook size={18} fill="currentColor" />
              <Twitter size={18} fill="currentColor" />
              <Instagram size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;