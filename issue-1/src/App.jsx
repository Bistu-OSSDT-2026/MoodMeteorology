import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  )
}
