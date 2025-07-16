import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import BottomNavigation from '@/components/BottomNavigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-100">
      <Header />
      <ProductGrid />
      <BottomNavigation />
    </main>
  )
}