export default function Header({ onReset, metrics }) {
  const isHealthy = metrics?.serviceLevel >= 90
  const statusColor = isHealthy ? 'bg-emerald-400' : metrics?.serviceLevel >= 70 ? 'bg-amber-400' : 'bg-red-400'

  return (
    <header className="border-b border-neutonic-border/60 px-6 py-4 backdrop-blur-sm bg-neutonic-bg/80 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-neutonic-orange to-amber-400 bg-clip-text text-transparent">
                Neutonic
              </span>
            </h1>
            <p className="text-xs text-white/30 mt-0.5 uppercase tracking-widest">Demand Planning Simulator</p>
          </div>
          {metrics && (
            <div className="hidden md:flex items-center gap-2 ml-4 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
              <span className={`w-2 h-2 rounded-full ${statusColor} animate-pulse`} />
              <span className="text-xs text-white/50">
                {metrics.serviceLevel.toFixed(0)}% service &middot; {metrics.stockoutEvents} stockouts
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/30 hidden sm:inline font-medium tracking-wide">JAN &mdash; DEC 2025</span>
          <button
            onClick={onReset}
            className="px-4 py-2 text-xs font-medium border border-neutonic-orange/30 text-neutonic-orange
                       rounded-lg hover:bg-neutonic-orange/10 hover:border-neutonic-orange/50
                       hover:shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-all cursor-pointer uppercase tracking-wider"
          >
            Reset All
          </button>
        </div>
      </div>
    </header>
  )
}
