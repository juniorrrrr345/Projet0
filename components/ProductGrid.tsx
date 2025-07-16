'use client'

import ProductCard from './ProductCard'
import Link from 'next/link'
import products from './products-data'

export default function ProductGrid() {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/produit/${product.id}`}>
            <ProductCard
              image={product.image}
              overlayLabel={product.overlayLabel}
              overlayEmojis={product.overlayEmojis}
              title={product.title}
              subtitle={product.subtitle}
              icons={product.icons}
              category={product.category}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}