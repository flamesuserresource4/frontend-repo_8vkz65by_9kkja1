import { Dumbbell, HeartPulse, Mountain } from 'lucide-react'

export default function Programs() {
  const items = [
    { icon: Mountain, title: 'Klimmen', desc: 'Vo2max- en krachtblokken voor berggeiten.' },
    { icon: Dumbbell, title: 'Snelheid', desc: 'Sprint, neuromusculair en cadanscontrole.' },
    { icon: HeartPulse, title: 'Uithouding', desc: 'Z2/Z3-tempo met progressieve duur.' },
  ]

  return (
    <section id="coaching" className="py-20 bg-[#0B1E33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Coaching & schema’s</h2>
          <p className="mt-3 text-white/70">Kant-en-klare plannen, slim aangepast op jouw leven.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 hover:translate-y-[-2px] transition">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#084734] text-[#B8F16B] p-3">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
              <a href="#signup" className="mt-4 inline-block text-[#B8F16B] font-semibold">Bekijk schema’s →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
