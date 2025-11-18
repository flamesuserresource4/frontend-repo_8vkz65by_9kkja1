import { ShieldCheck, Brain, Activity, Target } from 'lucide-react'

export default function Method() {
  const items = [
    {
      icon: Brain,
      title: 'Slimme analyse',
      desc: 'We koppelen je data en herkennen patronen die jou sneller maken.',
    },
    {
      icon: Activity,
      title: 'Trainingsblokken',
      desc: 'Gerichte prikkels per fase voor progressie zonder overbelasting.',
    },
    {
      icon: ShieldCheck,
      title: 'Veiligheid eerst',
      desc: 'Vroege waarschuwingen bij vermoeidheid en blessuresrisico.',
    },
    {
      icon: Target,
      title: 'Doelgericht',
      desc: 'Van eerste toertocht tot podiumplek — jouw plan, jouw tempo.',
    },
  ]

  return (
    <section id="methode" className="py-20 bg-[#0B1E33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Onze methode</h2>
          <p className="mt-3 text-white/70">Wetenschap, coaching en technologie in één ritme.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 hover:translate-y-[-2px] transition shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#084734] text-[#B8F16B] p-3 shadow-inner shadow-black/30">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
