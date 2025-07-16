'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-dark-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-red rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl">⚠️</span>
        </div>
        <div className="text-white text-lg font-medium mb-2">Une erreur s'est produite</div>
        <div className="text-gray-400 text-sm mb-6">Désolé, quelque chose s'est mal passé.</div>
        <button
          onClick={reset}
          className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}