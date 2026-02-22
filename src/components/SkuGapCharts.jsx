import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts'
import { SKUS } from '../data/demandModel'

function GapTooltip({ active, payload, label }) {
  if (!active || !payload?.[0]) return null
  const value = payload[0].value
  return (
    <div className="bg-neutonic-surface/95 backdrop-blur-md border border-neutonic-border rounded-lg px-3 py-2 shadow-2xl shadow-black/40 text-xs">
      <p className="text-white/40 mb-1 font-medium">{label}</p>
      <p className={`font-semibold ${value >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
        {value >= 0 ? '+' : ''}{value.toLocaleString()} units
      </p>
    </div>
  )
}

function SkuGapChart({ sku, data }) {
  const netGap = useMemo(() => data.reduce((sum, d) => sum + d.surplus, 0), [data])
  const isHealthy = netGap >= 0

  return (
    <div className="glow-card bg-neutonic-surface/60 backdrop-blur-sm rounded-xl border border-neutonic-border p-4 shadow-lg shadow-black/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: sku.color, boxShadow: `0 0 6px ${sku.color}40` }}
          />
          <h3 className="text-xs font-semibold text-white/80">{sku.name}</h3>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
          isHealthy ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'
        }`}>
          {isHealthy ? '+' : ''}{(netGap / 1000).toFixed(1)}k
        </span>
      </div>
      <div className="h-[110px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff06" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#ffffff30', fontSize: 9, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#ffffff20', fontSize: 9 }}
              axisLine={false}
              tickLine={false}
              width={35}
              tickFormatter={(v) => v >= 1000 || v <= -1000 ? `${(v / 1000).toFixed(0)}k` : v}
            />
            <ReferenceLine y={0} stroke="#ffffff15" strokeDasharray="2 2" />
            <Tooltip content={<GapTooltip />} cursor={false} />
            <Bar dataKey="surplus" radius={[3, 3, 0, 0]} animationDuration={600}>
              {data.map((entry, idx) => (
                <Cell
                  key={idx}
                  fill={entry.surplus >= 0 ? '#34D399' : '#F87171'}
                  fillOpacity={0.75}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function SkuGapCharts({ gaps }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white/90 mb-4">Supply vs Demand Gap</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKUS.map((sku) => (
          <SkuGapChart key={sku.key} sku={sku} data={gaps[sku.key]} />
        ))}
      </div>
    </div>
  )
}
