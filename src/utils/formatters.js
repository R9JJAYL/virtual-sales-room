export function formatCurrency(value) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value) {
  return `${value.toFixed(1)}%`
}

export function compactNumber(value) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`
  }
  return value.toString()
}

export function formatMultiplier(value) {
  return `${value.toFixed(1)}x`
}
