import Header from '@/components/Header'
import BottomNavigation from '@/components/BottomNavigation'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-100 flex flex-col">
      <Header />
      <div className="flex-1 pb-20 px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-white text-2xl font-bold mb-6 text-center">Contact</h1>
          
          <div className="space-y-4">
            {/* Informations de contact */}
            <div className="bg-dark-300 rounded-lg p-6">
              <h2 className="text-white text-lg font-semibold mb-4">Nous Contacter</h2>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-400 text-xl">📱</div>
                  <div>
                    <p className="text-white text-sm font-medium">Telegram</p>
                    <p className="text-gray-300 text-xs">@hashtagbot</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-400 text-xl">👻</div>
                  <div>
                    <p className="text-white text-sm font-medium">Snapchat</p>
                    <p className="text-gray-300 text-xs">hashtag_bot</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-green-400 text-xl">💬</div>
                  <div>
                    <p className="text-white text-sm font-medium">WhatsApp</p>
                    <p className="text-gray-300 text-xs">+33 6 XX XX XX XX</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horaires */}
            <div className="bg-dark-300 rounded-lg p-6">
              <h3 className="text-white text-lg font-semibold mb-3">Horaires</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Lundi - Vendredi: 9h - 22h</p>
                <p>Samedi: 10h - 20h</p>
                <p>Dimanche: 12h - 18h</p>
              </div>
            </div>
            
            {/* Zone de livraison */}
            <div className="bg-dark-300 rounded-lg p-6">
              <h3 className="text-white text-lg font-semibold mb-3">Zone de Livraison</h3>
              <p className="text-gray-300 text-sm">
                Nous livrons dans tout le Nord Pas-de-Calais et les régions limitrophes.
                Livraison rapide et discrète garantie.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}