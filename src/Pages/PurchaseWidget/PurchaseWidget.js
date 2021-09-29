import React, { useEffect, useState } from 'react'
import classes from './PurchaseWidget.module.scss'
import Products from '../../Components/Products'
import Contacts from '../../Components/Contacts'
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
    fetch(`https://run.mocky.io/v3/b5eb9a17-4e56-4841-bb9a-094cd3fcec96`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((header) => {
        return header.json()
      })
      .then((response) => {
        if (response) {
          const valuesCopy = { ...values }
          valuesCopy.allProducts = [...response]
          setValues(valuesCopy)
        }
      })
      .catch((e) => {
        return e
      })
  }, [values])

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
    </form>
  )
}
