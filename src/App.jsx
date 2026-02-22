import { useState, useMemo, useCallback } from 'react'
import Header from './components/Header'
import DemandChart from './components/DemandChart'
import ControlPanel from './components/ControlPanel'
import MetricsPanel from './components/MetricsPanel'
import SkuGapCharts from './components/SkuGapCharts'
import { computeModel } from './data/demandModel'

const DEFAULTS = {
  marketingMultiplier: 1.0,
  retailExpansion: 30,
  seasonalityStrength: 60,
  newMarketEntry: false,
  productionSplit: [25, 25, 25, 25],
  leadTime: 6,
  safetyStock: 14,
}

export default function App() {
  const [marketingMultiplier, setMarketingMultiplier] = useState(DEFAULTS.marketingMultiplier)
  const [retailExpansion, setRetailExpansion] = useState(DEFAULTS.retailExpansion)
  const [seasonalityStrength, setSeasonalityStrength] = useState(DEFAULTS.seasonalityStrength)
  const [newMarketEntry, setNewMarketEntry] = useState(DEFAULTS.newMarketEntry)
  const [productionSplit, setProductionSplit] = useState(DEFAULTS.productionSplit)
  const [leadTime, setLeadTime] = useState(DEFAULTS.leadTime)
  const [safetyStock, setSafetyStock] = useState(DEFAULTS.safetyStock)

  const sliderValues = {
    marketingMultiplier,
    retailExpansion,
    seasonalityStrength,
    newMarketEntry,
    productionSplit,
    leadTime,
    safetyStock,
  }

  const { demandData, metrics, skuGaps } = useMemo(
    () => computeModel(sliderValues),
    [marketingMultiplier, retailExpansion, seasonalityStrength, newMarketEntry, productionSplit, leadTime, safetyStock]
  )

  const handleChange = useCallback((key, value) => {
    const setters = {
      marketingMultiplier: setMarketingMultiplier,
      retailExpansion: setRetailExpansion,
      seasonalityStrength: setSeasonalityStrength,
      newMarketEntry: setNewMarketEntry,
      productionSplit: setProductionSplit,
      leadTime: setLeadTime,
      safetyStock: setSafetyStock,
    }
    setters[key]?.(value)
  }, [])

  const handleReset = useCallback(() => {
    setMarketingMultiplier(DEFAULTS.marketingMultiplier)
    setRetailExpansion(DEFAULTS.retailExpansion)
    setSeasonalityStrength(DEFAULTS.seasonalityStrength)
    setNewMarketEntry(DEFAULTS.newMarketEntry)
    setProductionSplit([...DEFAULTS.productionSplit])
    setLeadTime(DEFAULTS.leadTime)
    setSafetyStock(DEFAULTS.safetyStock)
  }, [])

  return (
    <div className="min-h-screen bg-neutonic-bg">
      <Header onReset={handleReset} metrics={metrics} />
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <DemandChart data={demandData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ControlPanel values={sliderValues} onChange={handleChange} />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <MetricsPanel metrics={metrics} />
            <SkuGapCharts gaps={skuGaps} />
          </div>
        </div>
      </main>
    </div>
  )
}
