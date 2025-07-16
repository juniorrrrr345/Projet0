import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import BottomNavigation from '@/components/BottomNavigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-100 flex flex-col">
      <Header />
      <div className="flex-1 pb-20">
        <ProductGrid />
      </div>
      <BottomNavigation />
    </div>
  )
}