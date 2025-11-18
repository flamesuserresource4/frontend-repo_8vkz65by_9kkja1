export default function Footer() {
  return (
    <footer className="bg-[#0B1E33] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-6 text-white/70">
          <div>
            <p className="text-white font-semibold">Shift Cycling</p>
            <p className="mt-2 text-sm">Slimmer trainen voor wielrenners. Data + coaching voor duurzaam resultaat.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Navigatie</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#methode" className="hover:text-white">Methode</a></li>
              <li><a href="#inzichten" className="hover:text-white">Inzichten</a></li>
              <li><a href="#coaching" className="hover:text-white">Coaching</a></li>
              <li><a href="#team" className="hover:text-white">Team</a></li>
              <li><a href="#integraties" className="hover:text-white">Integraties</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Contact</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>support@shiftcycling.app</li>
              <li>KVK 12345678</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Shift Cycling — Alle rechten voorbehouden.</div>
      </div>
    </footer>
  )
}
