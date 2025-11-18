import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0B1E33]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#084734] blur-3xl opacity-40" />
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B8F16B] blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,241,107,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(8,71,52,0.25),transparent_45%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles className="w-3 h-3 text-[#B8F16B]" /> Slimmer trainen, veiliger presteren
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Word sneller met minder moeite
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Datagedreven coaching voor wielrenners. Persoonlijke schema’s, live-inzichten en slimme rust — alles in één platform.
            </p>
            <div className="mt-8 flex items-center gap-4" id="cta">
              <a href="#signup" className="inline-flex items-center gap-2 rounded-xl bg-[#B8F16B] text-[#0B1E33] px-6 py-3 font-semibold shadow-lg shadow-[#B8F16B]/30 hover:shadow-xl hover:-translate-y-0.5 transition">
                Start gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#methode" className="text-white/80 hover:text-white transition">Zie hoe het werkt</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-white/80">
              <div>
                <p className="text-3xl font-bold text-white">+12%</p>
                <p className="text-sm">FTP gemiddeld in 8 weken</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">-18%</p>
                <p className="text-sm">minder overbelasting</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">96%</p>
                <p className="text-sm">blijft consequent trainen</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#CDEDB3]/10 to-[#084734]/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-6 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1728454994672-c8cc2d6edc43?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDeWNsaXN0JTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc2MzQ1MTcwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cyclist training" className="rounded-2xl object-cover w-full h-72 sm:h-96" />
              <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/90">
                  <p className="text-white text-sm font-semibold">Vermogen</p>
                  <p className="mt-1 text-[#B8F16B] font-bold">298W</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/90">
                  <p className="text-white text-sm font-semibold">HR</p>
                  <p className="mt-1 text-[#B8F16B] font-bold">152 bpm</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/90">
                  <p className="text-white text-sm font-semibold">RPE</p>
                  <p className="mt-1 text-[#B8F16B] font-bold">6/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
