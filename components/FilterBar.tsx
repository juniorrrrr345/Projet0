'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const handleFilterClick = (filterType: string) => {
    setActiveFilter(activeFilter === filterType ? null : filterType)
  }

  return (
    <div className="px-4 py-4">
      <div className="flex gap-3">
        <button 
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-between transition-all duration-200 ${
            activeFilter === 'categories' 
              ? 'bg-primary-red text-white' 
              : 'bg-dark-300 text-white hover:bg-dark-400'
          }`}
          onClick={() => handleFilterClick('categories')}
        >
          <span className="text-sm">Toutes les catégories</span>
          <ChevronDown size={16} className={`transition-transform duration-200 ${
            activeFilter === 'categories' ? 'rotate-180' : ''
          }`} />
        </button>
        
        <button 
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-between transition-all duration-200 ${
            activeFilter === 'farms' 
              ? 'bg-primary-red text-white' 
              : 'bg-dark-300 text-white hover:bg-dark-400'
          }`}
          onClick={() => handleFilterClick('farms')}
        >
          <span className="text-sm">Toutes les farms</span>
          <ChevronDown size={16} className={`transition-transform duration-200 ${
            activeFilter === 'farms' ? 'rotate-180' : ''
          }`} />
        </button>
      </div>
      
      {/* Dropdown content (can be expanded later) */}
      {activeFilter && (
        <div className="mt-2 p-3 bg-dark-300 rounded-lg animate-in slide-in-from-top-2">
          <div className="text-white text-sm">
            {activeFilter === 'categories' ? (
              <div className="space-y-2">
                <div className="text-gray-400">Catégories disponibles:</div>
                <div className="flex flex-wrap gap-2">
                  {['Premium', 'Dry-Sift', 'Weed', 'Hash', 'Concentrate'].map((cat) => (
                    <span key={cat} className="px-2 py-1 bg-dark-400 rounded text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-gray-400">Farms disponibles:</div>
                <div className="flex flex-wrap gap-2">
                  {['Farm A', 'Farm B', 'Farm C', 'Farm D'].map((farm) => (
                    <span key={farm} className="px-2 py-1 bg-dark-400 rounded text-xs">
                      {farm}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}