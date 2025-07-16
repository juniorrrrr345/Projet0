import { notFound } from 'next/navigation';
import products from '@/components/products-data';
import Image from 'next/image';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-dark-100 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-dark-100 text-white text-sm">
        <span>12:04</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-6 h-3 bg-white rounded-sm flex items-center justify-center text-xs text-black">51</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-dark-300 px-4 py-3 flex items-center justify-between">
        <button className="text-purple-400 text-sm">Fermer</button>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-white">
            <span className="text-blue-400">#</span>
            <span>HASHTAG BOT</span>
            <span>🔌</span>
          </div>
          <div className="text-gray-400 text-xs">mini-application</div>
        </div>
        <button className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">⋮</span>
        </button>
      </div>

      {/* Promotional Banner */}
      <div className="bg-primary-red text-white text-center py-3 px-4 font-medium">
        ENVOIE OFFRE À PARTIR DE 300€
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Background with glowing text */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-100 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="text-red-500 text-6xl font-bold opacity-30 transform rotate-12 absolute top-10 left-4">HASHTAG</div>
            <div className="text-red-500 text-6xl font-bold opacity-30 transform -rotate-12 absolute top-32 right-4">HASHTAG</div>
          </div>
        </div>

        {/* Video/Image Player */}
        <div className="relative mx-4 mt-4 bg-dark-300 rounded-lg overflow-hidden">
          <div className="relative h-48 bg-dark-400">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <button className="w-8 h-8 bg-black bg-opacity-80 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">←</span>
              </button>
              <span className="text-white text-sm">Retour</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-white text-xs mb-2">
                <span>0:04</span>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>⋮</span>
                </div>
                <span>-0:11</span>
              </div>
              <div className="w-full bg-dark-200 rounded-full h-1">
                <div className="bg-white h-1 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Card */}
        <div className="mx-4 mt-4 bg-dark-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-white text-2xl font-bold">{product.title}</h1>
              <div className="flex items-center gap-2">
                <span className="text-white text-xl">{product.subtitle}</span>
                {product.icons.map((icon, i) => (
                  <span key={i} className="text-red-500 text-xl">{icon}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
              {product.overlayLabel} {product.overlayEmojis.join(' ')}
            </div>
          </div>

          {product.strain && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white">•</span>
              <span className="text-white">{product.strain}</span>
            </div>
          )}

          {product.description && (
            <div className="space-y-2 mb-4">
              {product.description.map((desc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-white">{desc}</span>
                  {product.features && i === 0 && (
                    <div className="flex gap-1">
                      {product.features.map((feature, j) => (
                        <span key={j} className="text-white text-xs bg-dark-200 px-1 rounded">↑ {feature}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Pricing Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {product.prices?.map((price, i) => (
              <button key={i} className="bg-dark-200 text-blue-400 py-2 px-3 rounded-full text-sm font-medium">
                {price.label} {price.value}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-primary-blue text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <span>📤</span>
              COMMANDER VIA TELEGRAM
            </button>
            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <span>👻</span>
              COMMANDER VIA SNAPCHAT
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-dark-300 px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="text-blue-400 text-xl">🏠</span>
            <span className="text-blue-400 text-xs">Menu</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl">⭐</span>
            <span className="text-white text-xs">Pack Promo</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl">ℹ️</span>
            <span className="text-white text-xs">Infos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl">📤</span>
            <span className="text-white text-xs">Canal</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl">✉️</span>
            <span className="text-white text-xs">Contact</span>
          </div>
        </div>
        <div className="w-8 h-1 bg-white rounded-full mx-auto mt-2"></div>
      </div>
    </div>
  );
}