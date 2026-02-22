export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const SKUS = [
  { key: 'tropical', name: 'Tropical Ice', base: 12000, color: '#06B6D4', peakMonth: 6, peakIntensity: 0.6 },
  { key: 'orange', name: 'Orange Sunrise', base: 15000, color: '#FF8C00', peakMonth: 6, peakIntensity: 0.45 },
  { key: 'strawberry', name: 'Strawberry Lemonade', base: 10000, color: '#F43F5E', peakMonth: 7, peakIntensity: 0.5 },
  { key: 'bluerazz', name: 'Blue Raspberry', base: 8000, color: '#3B82F6', peakMonth: 5, peakIntensity: 0.35 },
]

const TOTAL_CAPACITY = 55000
const PRICE_PER_UNIT = 2.50

function seasonalFactor(monthIndex, peakMonth, peakIntensity) {
  const distance = Math.abs(monthIndex - peakMonth)
  const wrapped = Math.min(distance, 12 - distance)
  const factor = Math.cos((wrapped / 6) * Math.PI) * peakIntensity
  const decDip = monthIndex === 11 ? -0.10 : 0
  return factor + decDip
}

function retailRamp(monthIndex) {
  return monthIndex / 11
}

export function computeModel({
  marketingMultiplier,
  retailExpansion,
  seasonalityStrength,
  newMarketEntry,
  productionSplit,
  leadTime,
  safetyStock,
}) {
  const seasonalityFrac = seasonalityStrength / 100
  const retailFrac = retailExpansion / 100
  const newMarketFactor = newMarketEntry ? 1.25 : 1.0

  // Compute demand per SKU per month
  const demandData = MONTHS.map((month, mi) => {
    const row = { month }
    SKUS.forEach((sku) => {
      const seasonal = seasonalFactor(mi, sku.peakMonth, sku.peakIntensity)
      const demand = sku.base
        * marketingMultiplier
        * (1 + retailFrac * retailRamp(mi))
        * (1 + seasonalityFrac * seasonal)
        * newMarketFactor
      row[sku.key] = Math.round(demand)
    })
    return row
  })

  // Compute supply and gaps
  const leadTimePenalty = Math.max(0, (leadTime - 4) * 500)
  const skuGaps = {}
  let totalStockouts = 0
  let totalOverstock = 0
  let totalSupply = 0
  let totalLostRevenue = 0
  const skuDeficits = {}

  SKUS.forEach((sku, si) => {
    const capacity = (TOTAL_CAPACITY * productionSplit[si]) / 100
    const effectiveSupply = Math.max(0, capacity - leadTimePenalty)
    let skuDeficit = 0

    skuGaps[sku.key] = MONTHS.map((month, mi) => {
      const demand = demandData[mi][sku.key]
      const buffer = demand * (safetyStock / 30)
      const gap = effectiveSupply - demand

      if (gap < -buffer) {
        totalStockouts++
      }
      if (gap > 0) {
        totalOverstock += gap
      }
      if (gap < 0) {
        skuDeficit += Math.abs(gap)
        totalLostRevenue += Math.abs(gap) * PRICE_PER_UNIT
      }
      totalSupply += effectiveSupply

      return { month, surplus: Math.round(gap) }
    })

    skuDeficits[sku.key] = { name: sku.name, deficit: skuDeficit }
  })

  // Derive metrics
  const totalSkuMonths = SKUS.length * MONTHS.length
  const monthsServed = totalSkuMonths - totalStockouts
  const serviceLevel = (monthsServed / totalSkuMonths) * 100

  const overstockRisk = totalSupply > 0
    ? (totalOverstock / totalSupply) * 100
    : 0

  const deficitEntries = Object.values(skuDeficits)
  const bestSku = deficitEntries.reduce((a, b) => a.deficit < b.deficit ? a : b).name
  const worstSku = deficitEntries.reduce((a, b) => a.deficit > b.deficit ? a : b).name

  return {
    demandData,
    skuGaps,
    metrics: {
      serviceLevel: Math.round(serviceLevel * 10) / 10,
      stockoutEvents: totalStockouts,
      overstockRisk: Math.round(overstockRisk * 10) / 10,
      lostRevenue: Math.round(totalLostRevenue),
      bestSku,
      worstSku,
    },
  }
}
