export function maskAddress(address: string, start = 4, end = 4): string {
  if (address.length <= start + end) {
    return address
  }
  return `${address.slice(0, start)}...${address.slice(-end)}`
}

export function formatNumber(num: number): string {
  return Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(num)
}
