const formatter = new Intl.NumberFormat('ru-Ru', { currency: 'USD', style: 'currency' })

export function currency(value) {
  return formatter.format(value)
}
