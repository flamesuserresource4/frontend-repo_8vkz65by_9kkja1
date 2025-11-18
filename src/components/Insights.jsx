import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

const data = [
  { week: 'W1', ftp: 240, load: 320 },
  { week: 'W2', ftp: 246, load: 360 },
  { week: 'W3', ftp: 252, load: 390 },
  { week: 'W4', ftp: 258, load: 350 },
  { week: 'W5', ftp: 266, load: 410 },
  { week: 'W6', ftp: 270, load: 430 },
  { week: 'W7', ftp: 276, load: 440 },
  { week: 'W8', ftp: 280, load: 420 },
]

export default function Insights() {
  return (
    <section id="inzichten" className="py-20 bg-[#0B1E33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Zie je vooruitgang</h2>
            <p className="mt-3 text-white/70 max-w-xl">Realtime inzichten in vermogen, hartslag en trainingsbelasting. Visualiseer supercompensatie, bewaak je herstel en train met vertrouwen.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white text-sm">FTP trend</p>
                <p className="text-2xl font-bold text-[#B8F16B]">+16W</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white text-sm">Belasting</p>
                <p className="text-2xl font-bold text-[#B8F16B]">-8% pieken</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#CDEDB3]/10 to-[#084734]/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-6">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorFtp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#B8F16B" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#B8F16B" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#084734" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#084734" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="week" stroke="#9fb3c8"/>
                    <YAxis stroke="#9fb3c8"/>
                    <Tooltip contentStyle={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                    <Area type="monotone" dataKey="ftp" stroke="#B8F16B" fillOpacity={1} fill="url(#colorFtp)" strokeWidth={2} />
                    <Area type="monotone" dataKey="load" stroke="#084734" fillOpacity={1} fill="url(#colorLoad)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
