const formatCurrency = number => {
  if (number === undefined || number === null) {
    return ''
  }

  const value = number.toFixed(2).split('.')
  value[0] = 'R$ ' + value[0].split(/(?=(?:...)*$)/).join('.')
  return value.join(',')
}

const formatPhoneNumber = text => {
  const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/
  const str = text.replace(/[^0-9]/g, '').slice(0, 11)

  return str.replace(regex, '($1) $2-$3')
}

const compareObjects = (prod1, prod2, key) => {
  const produto1 = prod1[key].toUpperCase()
  const produto2 = prod2[key].toUpperCase()

  if (produto1 < produto2) {
    return -1
  }
  if (produto1 > produto2) {
    return 1
  }
  return 0
}

export { formatCurrency, formatPhoneNumber, compareObjects }
