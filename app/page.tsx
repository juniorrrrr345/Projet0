import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import BottomNavigation from '@/components/BottomNavigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-100">
      <Header />
      <div className="pb-20">
        <ProductGrid />
      </div>
      <BottomNavigation />
    </main>
  )
}