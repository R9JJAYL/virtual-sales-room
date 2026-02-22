import { useEffect, useRef, useState } from 'react'
import { formatCurrency, formatPercent } from '../utils/formatters'

function useAnimatedNumber(target, duration = 400) {
  const [display, setDisplay] = useState(target)
  const rafRef = useRef(null)
  const startRef = useRef(target)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (typeof target !== 'number') {
      setDisplay(target)
      return
    }
    startRef.current = display
    startTimeRef.current = performance.now()

    function animate(now) {
      const elapsed = now - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = startRef.current + (target - startRef.current) * eased
      setDisplay(current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target])

  return display
}

function getServiceLevelColor(value) {
  if (value >= 90) return { text: 'text-emerald-400', border: 'border-l-emerald-400', glow: 'shadow-emerald-500/10' }
  if (value >= 80) return { text: 'text-amber-400', border: 'border-l-amber-400', glow: 'shadow-amber-500/10' }
  return { text: 'text-red-400', border: 'border-l-red-400', glow: 'shadow-red-500/10' }
}

function getStockoutColor(value) {
  if (value <= 3) return { text: 'text-emerald-400', border: 'border-l-emerald-400', glow: 'shadow-emerald-500/10' }
  if (value <= 6) return { text: 'text-amber-400', border: 'border-l-amber-400', glow: 'shadow-amber-500/10' }
  return { text: 'text-red-400', border: 'border-l-red-400', glow: 'shadow-red-500/10' }
}

function MetricCard({ label, value, colors, icon }) {
  return (
    <div
      className={`glow-card bg-neutonic-surface/60 backdrop-blur-sm rounded-xl border border-neutonic-border border-l-4 ${colors.border}
                  p-5 shadow-lg ${colors.glow}`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-white/40 uppercase tracking-wider font-medium">{label}</p>
        <span className="text-white/20 text-lg">{icon}</span>
      </div>
      <p className={`text-2xl font-bold tabular-nums ${colors.text} transition-colors duration-300`}>{value}</p>
    </div>
  )
}

export default function MetricsPanel({ metrics }) {
  const {
    serviceLevel,
    stockoutEvents,
    overstockRisk,
    lostRevenue,
    bestSku,
    worstSku,
  } = metrics

  const animatedServiceLevel = useAnimatedNumber(serviceLevel)
  const animatedStockouts = useAnimatedNumber(stockoutEvents)
  const animatedOverstock = useAnimatedNumber(overstockRisk)
  const animatedRevenue = useAnimatedNumber(lostRevenue)

  const revenueColors = lostRevenue > 50000
    ? { text: 'text-red-400', border: 'border-l-red-400', glow: 'shadow-red-500/10' }
    : lostRevenue > 20000
    ? { text: 'text-amber-400', border: 'border-l-amber-400', glow: 'shadow-amber-500/10' }
    : { text: 'text-emerald-400', border: 'border-l-emerald-400', glow: 'shadow-emerald-500/10' }

  const overstockColors = overstockRisk > 20
    ? { text: 'text-amber-400', border: 'border-l-amber-400', glow: 'shadow-amber-500/10' }
    : { text: 'text-emerald-400', border: 'border-l-emerald-400', glow: 'shadow-emerald-500/10' }

  return (
    <div>
      <h2 className="text-lg font-semibold text-white/90 mb-4">Impact Metrics</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          label="Service Level"
          icon="&#9678;"
          value={formatPercent(animatedServiceLevel)}
          colors={getServiceLevelColor(serviceLevel)}
        />
        <MetricCard
          label="Stockout Events"
          icon="&#9888;"
          value={Math.round(animatedStockouts)}
          colors={getStockoutColor(stockoutEvents)}
        />
        <MetricCard
          label="Overstock Risk"
          icon="&#9638;"
          value={formatPercent(animatedOverstock)}
          colors={overstockColors}
        />
        <MetricCard
          label="Lost Revenue"
          icon="&#163;"
          value={formatCurrency(Math.round(animatedRevenue))}
          colors={revenueColors}
        />
        <MetricCard
          label="Best SKU"
          icon="&#9650;"
          value={bestSku}
          colors={{ text: 'text-emerald-400', border: 'border-l-emerald-400', glow: 'shadow-emerald-500/10' }}
        />
        <MetricCard
          label="Worst SKU"
          icon="&#9660;"
          value={worstSku}
          colors={{ text: 'text-red-400', border: 'border-l-red-400', glow: 'shadow-red-500/10' }}
        />
      </div>
    </div>
  )
}
