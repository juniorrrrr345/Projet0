import { notFound } from 'next/navigation';
import products from '@/components/products-data';
import Image from 'next/image';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-dark-100 flex flex-col items-center">
      <div className="w-full max-w-md bg-dark-300 rounded-lg overflow-hidden mt-6 shadow-lg">
        <div className="relative w-full h-56 bg-gray-700">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
          <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
            {product.overlayLabel} {product.overlayEmojis.join(' ')}
          </div>
          <div className="absolute top-2 right-2 bg-primary-red text-white px-2 py-1 rounded text-xs font-medium">
            {product.category}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-white text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-400 mb-2">{product.subtitle}</p>
          <div className="flex gap-2 mb-4">
            {product.icons.map((icon, i) => (
              <span key={i} className="text-yellow-400 text-lg">{icon}</span>
            ))}
          </div>
          {/* Ajoute ici la description, prix, boutons, etc. */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.prices?.map((p, i) => (
              <span key={i} className="bg-dark-200 text-white px-3 py-1 rounded-full text-sm">{p.label} <b>{p.value}</b></span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="bg-primary-blue text-white py-2 rounded text-center font-bold">COMMANDER VIA TELEGRAM</a>
            <a href="#" className="bg-yellow-400 text-black py-2 rounded text-center font-bold">COMMANDER VIA SNAPCHAT</a>
          </div>
        </div>
      </div>
    </main>
  );
}