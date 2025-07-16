'use client'

import { Home, Star, Info, Send, Mail } from 'lucide-react'

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-300 border-t border-dark-400">
      <div className="flex items-center justify-around py-3">
        {/* Menu - Active */}
        <button className="flex flex-col items-center">
          <Home size={24} className="text-primary-blue mb-1" />
          <span className="text-primary-blue text-xs font-medium">Menu</span>
          <div className="w-6 h-0.5 bg-primary-blue mt-1"></div>
        </button>
        
        {/* Pack Promo */}
        <button className="flex flex-col items-center">
          <Star size={24} className="text-white mb-1" />
          <span className="text-white text-xs">Pack Promo</span>
        </button>
        
        {/* Infos */}
        <button className="flex flex-col items-center">
          <Info size={24} className="text-white mb-1" />
          <span className="text-white text-xs">Infos</span>
        </button>
        
        {/* Canal */}
        <button className="flex flex-col items-center">
          <Send size={24} className="text-white mb-1" />
          <span className="text-white text-xs">Canal</span>
        </button>
        
        {/* Contact */}
        <button className="flex flex-col items-center">
          <Mail size={24} className="text-white mb-1" />
          <span className="text-white text-xs">Contact</span>
        </button>
      </div>
    </div>
  )
}