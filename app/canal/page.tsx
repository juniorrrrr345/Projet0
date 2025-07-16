import Header from '@/components/Header'
import BottomNavigation from '@/components/BottomNavigation'

export default function CanalPage() {
  return (
    <main className="min-h-screen bg-dark-100">
      <Header />
      <div className="pb-20 px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-white text-2xl font-bold mb-6 text-center">Nos Canaux</h1>
          
          <div className="space-y-4">
            {/* Telegram */}
            <div className="bg-dark-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Telegram</h3>
                  <p className="text-gray-300 text-sm">Commandez directement via Telegram</p>
                </div>
                <div className="text-blue-400 text-2xl">📱</div>
              </div>
              <a 
                href="#" 
                className="mt-4 bg-blue-500 text-white py-3 px-6 rounded-lg block text-center font-semibold"
              >
                Rejoindre le Canal
              </a>
            </div>
            
            {/* Snapchat */}
            <div className="bg-dark-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Snapchat</h3>
                  <p className="text-gray-300 text-sm">Suivez-nous sur Snapchat</p>
                </div>
                <div className="text-yellow-400 text-2xl">👻</div>
              </div>
              <a 
                href="#" 
                className="mt-4 bg-yellow-400 text-black py-3 px-6 rounded-lg block text-center font-semibold"
              >
                Ajouter sur Snapchat
              </a>
            </div>
            
            {/* WhatsApp */}
            <div className="bg-dark-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">WhatsApp</h3>
                  <p className="text-gray-300 text-sm">Contactez-nous sur WhatsApp</p>
                </div>
                <div className="text-green-400 text-2xl">💬</div>
              </div>
              <a 
                href="#" 
                className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg block text-center font-semibold"
              >
                Ouvrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </main>
  )
}