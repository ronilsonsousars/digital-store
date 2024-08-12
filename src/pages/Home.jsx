import FeaturedCollections from "../components/FeaturedCollections"
import Hero from "../components/Hero"
import SpecialOffer from "../components/SpecialOffer"
import TrendingProducts from "../components/TrendingProducts"

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCollections />
      <TrendingProducts />
      <SpecialOffer />
    </div>
  )
}

export default Home
