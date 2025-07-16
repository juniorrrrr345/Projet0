import Header from '@/components/Header'
import BottomNavigation from '@/components/BottomNavigation'

export default function InfosPage() {
  return (
    <div className="min-h-screen bg-dark-100 flex flex-col">
      <Header />
      <div className="flex-1 pb-20 px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-white text-2xl font-bold mb-6 text-center">Informations</h1>
          
          <div className="bg-dark-300 rounded-lg p-6 space-y-4">
            <div className="text-white">
              <h2 className="text-lg font-semibold mb-3">À propos de HASHTAG BOT</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                HASHTAG BOT est votre boutique de confiance pour des produits premium de qualité. 
                Nous proposons une large gamme de produits sélectionnés avec soin pour répondre 
                à tous vos besoins.
              </p>
            </div>
            
            <div className="text-white">
              <h3 className="text-md font-semibold mb-2">Nos Services</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Livraison rapide et discrète</li>
                <li>• Produits de qualité premium</li>
                <li>• Service client disponible 24/7</li>
                <li>• Paiement sécurisé</li>
              </ul>
            </div>
            
            <div className="text-white">
              <h3 className="text-md font-semibold mb-2">Contact</h3>
              <p className="text-gray-300 text-sm">
                Pour toute question ou commande, contactez-nous via Telegram ou Snapchat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}