export default function Team() {
  const people = [
    { name: 'Nova', role: 'Head Coach – Performance', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=900&auto=format&fit=crop' },
    { name: 'Jules', role: 'Sport Scientist – Physiology', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=900&auto=format&fit=crop' },
    { name: 'Rafa', role: 'Data Coach – Analytics', img: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=900&auto=format&fit=crop' },
  ]

  return (
    <section id="team" className="py-20 bg-[#0B1E33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ons team</h2>
          <p className="mt-3 text-white/70">Echte coaches, echte resultaten. Menselijk + data-gedreven.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
              <div className="p-5">
                <p className="text-white font-semibold">{p.name}</p>
                <p className="text-white/70 text-sm">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
