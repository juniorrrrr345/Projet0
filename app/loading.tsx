export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-red rounded-full animate-pulse mx-auto mb-4"></div>
        <div className="text-white text-lg font-medium">Chargement...</div>
        <div className="text-gray-400 text-sm mt-2">HASHTAG BOT</div>
      </div>
    </div>
  )
}