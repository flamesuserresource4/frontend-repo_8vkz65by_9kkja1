import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Method from './components/Method'
import Insights from './components/Insights'
import Programs from './components/Programs'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Integrations from './components/Integrations'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1E33]">
      {/* Background accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E33] via-[#0B1E33] to-black" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#084734] blur-[140px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CDEDB3] blur-[120px] opacity-10" />
      </div>

      <Navbar />
      <Hero />
      <Method />
      <Insights />
      <Programs />
      <Team />
      <Reviews />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
