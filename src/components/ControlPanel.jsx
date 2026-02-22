import { useCallback, useMemo } from 'react'
import { SKUS } from '../data/demandModel'
import { formatMultiplier } from '../utils/formatters'

function Slider({ label, value, min, max, step, format, onChange, color }) {
  const pct = ((value - min) / (max - min)) * 100
  const accentColor = color || '#FF6B00'

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/50 flex items-center gap-2 font-medium">
          {color && (
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}40` }}
            />
          )}
          {label}
        </span>
        <span className="text-xs font-semibold text-white/80 tabular-nums bg-white/5 px-2 py-0.5 rounded">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="slider-input"
        style={{
          '--fill-pct': `${pct}%`,
          '--accent': accentColor,
        }}
      />
    </div>
  )
}

function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-xs text-white/50 font-medium">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
          checked
            ? 'bg-neutonic-orange shadow-[0_0_12px_rgba(255,107,0,0.3)]'
            : 'bg-neutonic-border'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all ${
            checked
              ? 'translate-x-6 bg-white'
              : 'translate-x-0 bg-white/70'
          }`}
        />
      </button>
    </div>
  )
}

function SectionDivider() {
  return <div className="border-t border-white/5 my-1" />
}

export default function ControlPanel({ values, onChange }) {
  const {
    marketingMultiplier,
    retailExpansion,
    seasonalityStrength,
    newMarketEntry,
    productionSplit,
    leadTime,
    safetyStock,
  } = values

  const splitTotal = useMemo(() => productionSplit.reduce((a, b) => a + b, 0), [productionSplit])

  const handleSplitChange = useCallback(
    (index, newValue) => {
      const old = productionSplit[index]
      const delta = newValue - old
      const othersSum = productionSplit.reduce((sum, v, i) => (i !== index ? sum + v : sum), 0)

      let newSplit
      if (othersSum === 0) {
        const share = Math.round((100 - newValue) / (productionSplit.length - 1))
        newSplit = productionSplit.map((v, i) => (i === index ? newValue : share))
      } else {
        newSplit = productionSplit.map((v, i) => {
          if (i === index) return newValue
          return Math.max(0, Math.round(v - (delta * v) / othersSum))
        })
      }

      const sum = newSplit.reduce((a, b) => a + b, 0)
      if (sum !== 100) {
        const diff = 100 - sum
        let maxIdx = -1
        let maxVal = -1
        newSplit.forEach((v, i) => {
          if (i !== index && v > maxVal) {
            maxVal = v
            maxIdx = i
          }
        })
        if (maxIdx >= 0) {
          newSplit[maxIdx] = Math.max(0, newSplit[maxIdx] + diff)
        }
      }

      onChange('productionSplit', newSplit)
    },
    [productionSplit, onChange]
  )

  return (
    <div className="glow-card bg-neutonic-surface/80 backdrop-blur-sm rounded-2xl border border-neutonic-border p-6 space-y-6 shadow-lg shadow-black/20">
      {/* Demand Levers */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-4 rounded-full bg-neutonic-orange" />
          <h3 className="text-xs font-semibold uppercase tracking-widest text-neutonic-orange">
            Demand Levers
          </h3>
        </div>
        <div className="space-y-5">
          <Slider
            label="Marketing Spend"
            value={marketingMultiplier}
            min={0.5}
            max={3}
            step={0.1}
            format={formatMultiplier}
            onChange={(v) => onChange('marketingMultiplier', v)}
          />
          <Slider
            label="Retail Expansion"
            value={retailExpansion}
            min={0}
            max={100}
            step={1}
            format={(v) => `${v}%`}
            onChange={(v) => onChange('retailExpansion', v)}
          />
          <Slider
            label="Seasonality Strength"
            value={seasonalityStrength}
            min={0}
            max={100}
            step={1}
            format={(v) => `${v}%`}
            onChange={(v) => onChange('seasonalityStrength', v)}
          />
          <Toggle
            label="New Market Entry (US)"
            checked={newMarketEntry}
            onChange={(v) => onChange('newMarketEntry', v)}
          />
        </div>
      </div>

      <SectionDivider />

      {/* Supply Levers */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-4 rounded-full bg-neutonic-orange" />
          <h3 className="text-xs font-semibold uppercase tracking-widest text-neutonic-orange">
            Supply Levers
          </h3>
        </div>
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/50 font-medium">Production Split</span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                splitTotal === 100
                  ? 'bg-emerald-400/10 text-emerald-400'
                  : 'bg-red-400/10 text-red-400'
              }`}>
                {splitTotal}%
              </span>
            </div>
            <div className="space-y-4">
              {SKUS.map((sku, i) => (
                <Slider
                  key={sku.key}
                  label={sku.name}
                  value={productionSplit[i]}
                  min={0}
                  max={100}
                  step={1}
                  format={(v) => `${v}%`}
                  onChange={(v) => handleSplitChange(i, v)}
                  color={sku.color}
                />
              ))}
            </div>
          </div>
          <Slider
            label="Lead Time"
            value={leadTime}
            min={2}
            max={12}
            step={1}
            format={(v) => `${v} wk`}
            onChange={(v) => onChange('leadTime', v)}
          />
          <Slider
            label="Safety Stock"
            value={safetyStock}
            min={5}
            max={30}
            step={1}
            format={(v) => `${v} days`}
            onChange={(v) => onChange('safetyStock', v)}
          />
        </div>
      </div>
    </div>
  )
}
