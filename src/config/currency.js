import currency from 'currency.js'

const IDR = (value) =>
  currency(value, { symbol: 'Rp ', decimal: ',', separator: '.' })

export default IDR

export { currency }
