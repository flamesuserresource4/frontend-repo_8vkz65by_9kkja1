export default function Reviews() {
  const quotes = [
    { q: 'Binnen 6 weken +18W FTP en nooit over de grens gegaan.', a: 'Milan, amateur' },
    { q: 'Ik train nu korter, maar kom frisser en sneller aan de start.', a: 'Sanne, gran fondo' },
    { q: 'De rustadviezen zijn goud waard. Minder blessures, meer plezier.', a: 'Timo, crit racer' },
  ]

  return (
    <section className="py-20 bg-[#0B1E33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Resultaten die tellen</h2>
          <p className="mt-3 text-white/70">Bewijs van progressie en veiligheid.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((x, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <p className="text-white text-lg">“{x.q}”</p>
              <p className="mt-3 text-sm text-white/70">— {x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
