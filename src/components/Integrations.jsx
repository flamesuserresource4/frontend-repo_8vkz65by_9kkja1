import { Watch, Smartphone, ActivitySquare } from 'lucide-react'

export default function Integrations() {
  const items = [
    { icon: ActivitySquare, name: 'Strava', desc: 'Synchroniseer ritten en segmenten.' },
    { icon: Watch, name: 'Garmin', desc: 'HR, vermogen en workouts pushen.' },
    { icon: Smartphone, name: 'Wahoo', desc: 'Directe ERG-workouts en data.' },
  ]

  return (
    <section id="integraties" className="py-20 bg-[#0B1E33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Werkt met jouw tools</h2>
          <p className="mt-3 text-white/70">Koppel je favoriete apps en devices.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 text-center">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#084734] text-[#B8F16B] p-3">
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-3 text-white font-semibold">{name}</p>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
