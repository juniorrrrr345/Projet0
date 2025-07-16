'use client'

import { X, MoreVertical, Home, Star, Info, Send, Mail } from 'lucide-react'
import AnimatedLogo from './AnimatedLogo'
import FilterBar from './FilterBar'

export default function Header() {
  return (
    <div className="bg-dark-100 min-h-screen">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-dark-200">
        <button className="text-white text-sm font-medium">
          <X size={20} />
        </button>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-bold text-lg">#</span>
            <span className="text-white font-bold text-lg">HASHTAG BOT</span>
            <span className="text-blue-400">🔌</span>
          </div>
          <div className="text-gray-400 text-xs">mini-application</div>
        </div>
        
        <button className="text-white">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Banner */}
      <div className="bg-primary-red text-white text-center py-4 px-4">
        <h1 className="text-lg font-bold">NUMERO 1 DANS LE NORD PAS DE CALAIS</h1>
      </div>

      {/* Logo Section */}
      <div className="relative py-8 px-4">
        <div className="flex justify-center">
          <AnimatedLogo />
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar />
    </div>
  )
}