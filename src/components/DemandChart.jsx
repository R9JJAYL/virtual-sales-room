import { useMemo } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { SKUS } from '../data/demandModel'
import { compactNumber } from '../utils/formatters'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null
  const total = payload.reduce((sum, entry) => sum + entry.value, 0)
  return (
    <div className="bg-neutonic-surface/95 backdrop-blur-md border border-neutonic-border rounded-xl px-5 py-4 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between mb-3">
        <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{label} 2025</p>
        <p className="text-white/70 text-xs font-semibold tabular-nums">{total.toLocaleString()} total</p>
      </div>
      <div className="space-y-1.5">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shadow-sm"
                style={{ backgroundColor: entry.color, boxShadow: `0 0 6px ${entry.color}40` }}
              />
              <span className="text-white/60">
                {SKUS.find((s) => s.key === entry.dataKey)?.name}
              </span>
            </div>
            <span className="font-semibold text-white tabular-nums">
              {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomLegend({ payload }) {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-xs text-white/50 font-medium">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color, boxShadow: `0 0 6px ${entry.color}30` }}
          />
          {SKUS.find((s) => s.key === entry.dataKey)?.name}
        </div>
      ))}
    </div>
  )
}

export default function DemandChart({ data }) {
  // Compute a stepped y-axis max so the scale doesn't auto-fit tightly.
  // This makes demand changes visually obvious — lines grow/shrink instead of axis rescaling.
  const yMax = useMemo(() => {
    const maxVal = Math.max(...data.flatMap((row) => SKUS.map((s) => row[s.key] || 0)))
    // Round up to the nearest step: 10k for values under 50k, 20k for under 100k, 50k above
    const step = maxVal < 50000 ? 10000 : maxVal < 100000 ? 20000 : 50000
    return Math.ceil(maxVal / step) * step
  }, [data])

  return (
    <div className="glow-card bg-neutonic-surface/80 backdrop-blur-sm rounded-2xl border border-neutonic-border p-6 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white/90">Demand Forecast</h2>
        <span className="text-xs text-white/30 uppercase tracking-wider">Units / Month</span>
      </div>
      <div className="h-[40vh] min-h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <defs>
              {SKUS.map((sku) => (
                <linearGradient key={sku.key} id={`gradient-${sku.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={sku.color} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={sku.color} stopOpacity={0.02} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#ffffff40', fontSize: 11, fontWeight: 500 }}
              axisLine={{ stroke: '#ffffff10' }}
              tickLine={false}
            />
            <YAxis
              domain={[0, yMax]}
              tickFormatter={compactNumber}
              tick={{ fill: '#ffffff30', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={50}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#ffffff10', strokeDasharray: '4 4' }} />
            <Legend content={<CustomLegend />} />
            {SKUS.map((sku) => (
              <Area
                key={sku.key}
                type="monotone"
                dataKey={sku.key}
                stroke={sku.color}
                fill={`url(#gradient-${sku.key})`}
                strokeWidth={2.5}
                dot={false}
                activeDot={{
                  r: 6,
                  strokeWidth: 2,
                  stroke: sku.color,
                  fill: '#0F0F0F',
                  style: { filter: `drop-shadow(0 0 4px ${sku.color})` },
                }}
                animationDuration={600}
                animationEasing="ease-out"
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
