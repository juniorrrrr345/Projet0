'use client'

import { useEffect, useState } from 'react'

export default function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center relative overflow-hidden">
        <span className="text-white text-4xl font-bold z-10">#</span>
        
        {/* Animated border */}
        <div className={`absolute inset-0 rounded-full border-2 border-primary-red transition-all duration-1000 ${
          isAnimating ? 'scale-110 opacity-50' : 'scale-100 opacity-100'
        }`}></div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary-red to-primary-blue opacity-20 transition-all duration-1000 ${
          isAnimating ? 'scale-125' : 'scale-100'
        }`}></div>
      </div>
      
      {/* Text animation */}
      <div className="text-center mt-4">
        <div className={`text-white text-sm font-medium transition-all duration-500 ${
          isAnimating ? 'text-primary-red' : ''
        }`}>
          HASHTAG
        </div>
      </div>
    </div>
  )
}