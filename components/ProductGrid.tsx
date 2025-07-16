'use client'

import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    image: '/product1.jpg',
    overlayLabel: 'JAUNE MOUSSEUX',
    overlayEmojis: ['🍋', '🇲🇦'],
    title: 'La mousse ++',
    subtitle: 'MOUSSE PREMIUM',
    icons: ['🏆', '🏆'],
    category: 'Premium'
  },
  {
    id: 2,
    image: '/product2.jpg',
    overlayLabel: 'DRY-SIFT 90U',
    overlayEmojis: ['🧨', '🧨'],
    title: 'Lemon Haze 🍋🍋',
    subtitle: 'DRY-SIFT 90u 🧨🧨',
    icons: ['⭐', '⭐'],
    category: 'Dry-Sift'
  },
  {
    id: 3,
    image: '/product3.jpg',
    overlayLabel: 'DRY-SIFT 90U',
    overlayEmojis: ['🧨', '🧨'],
    title: 'Orangeade',
    subtitle: 'DRY-SIFT 90u',
    icons: ['🔥', '🔥'],
    category: 'Dry-Sift'
  },
  {
    id: 4,
    image: '/product4.jpg',
    overlayLabel: 'WEED NL',
    overlayEmojis: ['🌷', '🇳🇱'],
    title: 'Amnesia Haze',
    subtitle: 'WEED PREMIUM',
    icons: ['💎', '💎'],
    category: 'Weed'
  },
  {
    id: 5,
    image: '/product5.jpg',
    overlayLabel: 'HASH PREMIUM',
    overlayEmojis: ['💎', '💎'],
    title: 'Hash Gold',
    subtitle: 'HASH PREMIUM',
    icons: ['👑', '👑'],
    category: 'Hash'
  },
  {
    id: 6,
    image: '/product6.jpg',
    overlayLabel: 'CONCENTRATE',
    overlayEmojis: ['⚡', '⚡'],
    title: 'Live Resin',
    subtitle: 'CONCENTRATE PREMIUM',
    icons: ['💫', '💫'],
    category: 'Concentrate'
  }
]

export default function ProductGrid() {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            overlayLabel={product.overlayLabel}
            overlayEmojis={product.overlayEmojis}
            title={product.title}
            subtitle={product.subtitle}
            icons={product.icons}
            category={product.category}
          />
        ))}
      </div>
    </div>
  )
}