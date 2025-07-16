'use client'

interface ProductCardProps {
  image: string
  overlayLabel: string
  overlayEmojis: string[]
  title: string
  subtitle: string
  icons: string[]
  category: string
}

export default function ProductCard({
  image,
  overlayLabel,
  overlayEmojis,
  title,
  subtitle,
  icons,
  category
}: ProductCardProps) {
  return (
    <div className="bg-dark-300 rounded-lg overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="w-full h-48 bg-gray-600 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
          
          {/* Overlay Label */}
          <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
            {overlayLabel} {overlayEmojis.join(' ')}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-2 right-2 bg-primary-red text-white px-2 py-1 rounded text-xs font-medium">
            {category}
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
        <p className="text-gray-400 text-xs mb-2">{subtitle}</p>
        
        {/* Icons */}
        <div className="flex gap-1">
          {icons.map((icon, index) => (
            <span key={index} className="text-yellow-400 text-sm">{icon}</span>
          ))}
        </div>
      </div>
    </div>
  )
}