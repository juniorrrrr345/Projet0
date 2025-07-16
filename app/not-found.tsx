import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-red rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl">404</span>
        </div>
        <div className="text-white text-lg font-medium mb-2">Page non trouvée</div>
        <div className="text-gray-400 text-sm mb-6">La page que vous recherchez n'existe pas.</div>
        <Link
          href="/"
          className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}