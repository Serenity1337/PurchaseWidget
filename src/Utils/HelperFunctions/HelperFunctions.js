export const returnPriceObj = (values) => {
  const profileCopy = { ...values.profile }
  const { products, taxInfo } = profileCopy
  let netTotal = 0
  let grossTotal = 0
  for (let index = 0; index < products.length; index++) {
    netTotal += products[index].price.amount
  }
  let taxes = Number(((taxInfo.rate * netTotal) / 100).toFixed(2))
  grossTotal = Number((netTotal + taxes).toFixed(2))
  const newPriceObj = {
    netTotal,
    taxes,
    grossTotal: grossTotal,
    currency: values.allProducts[0].price.currency,
  }
  profileCopy.price = newPriceObj
  return profileCopy
}
