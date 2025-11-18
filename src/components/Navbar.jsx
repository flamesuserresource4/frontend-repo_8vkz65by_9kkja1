import { Menu, X, Bike, Flame } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Methode', href: '#methode' },
    { label: 'Inzichten', href: '#inzichten' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'Team', href: '#team' },
    { label: 'Integraties', href: '#integraties' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1E33]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0B1E33]/40 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-[#B8F16B] blur-md opacity-40 group-hover:opacity-60 transition" />
                <div className="relative rounded-lg bg-[#084734] p-2 text-[#B8F16B] shadow-inner shadow-black/30">
                  <Bike className="w-5 h-5" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Shift Cycling</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-[#B8F16B] text-[#0B1E33] font-semibold px-4 py-2 shadow-lg shadow-[#B8F16B]/30 hover:shadow-xl hover:-translate-y-0.5 transition">
                Start slimmer trainen
                <Flame className="w-4 h-4" />
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-white/90 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8F16B] text-[#0B1E33] font-semibold px-4 py-2 shadow-md">
                  Start slimmer trainen
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
