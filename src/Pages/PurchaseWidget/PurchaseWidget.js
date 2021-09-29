import React, { useEffect, useState } from 'react'
import classes from './PurchaseWidget.module.scss'
import Products from '../../Components/Products'
import Contacts from '../../Components/Contacts'
import Checkout from '../../Components/Checkout'
import { getProducts, getIp, getTaxes } from '../../Utils/Api/Api'
export const PurchaseWidget = () => {
  const [values, setValues] = useState({
    formState: [
      { products: true },
      { contacts: false },
      { orderReview: false },
    ],
    allProducts: [],
    profile: {
      products: [],
      contact: { firstName: '', lastName: '', email: '' },
      price: {},
      taxInfo: {},
    },
  })
  useEffect(() => {
    const valuesCopy = { ...values }
    const taxesResponse = getTaxes()
    const productsResponse = getProducts()
    const ipResponse = getIp()
    productsResponse.then((products) => {
      valuesCopy.allProducts = [...products]
    })

    taxesResponse.then((taxes) => {
      ipResponse.then((ip) => {
        const tax_rate = taxes.filter(
          (code) => code.countryCode === ip.country_code.toLowerCase()
        )
        console.log(tax_rate)
        console.log(ip)
        valuesCopy.profile.taxInfo = {
          countryCode: ip.country_code,
          rate: tax_rate[0].rate,
        }
        setValues(valuesCopy)
      })
    })
  }, [])

  return (
    <form className={classes.container}>
      <h1>Purchase widget</h1>
      {/* <div className={classes.}>1</div> */}
      {values.formState[0].products ? (
        <Products values={values} setValues={setValues} />
      ) : null}
      {values.formState[1].contacts ? (
        <Contacts values={values} setValues={setValues} />
      ) : null}
      {values.formState[2].orderReview ? (
        <Checkout values={values} setValues={setValues} />
      ) : null}
    </form>
  )
}
