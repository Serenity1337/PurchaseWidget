import React, { useEffect, useState } from 'react'
import classes from './PurchaseWidget.module.scss'
import Products from '../../Components/Products'
import Contacts from '../../Components/Contacts'
import Checkout from '../../Components/Checkout'
import OrderComplete from '../../Components/OrderComplete'
import { getProducts, getIp, getTaxes } from '../../Utils/Api/Api'
import { useDispatch, useSelector } from 'react-redux'

export const PurchaseWidget = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const formState = useSelector((state) => state.formState)
  useEffect(() => {
    const taxesResponse = getTaxes()
    const productsResponse = getProducts()
    const ipResponse = getIp()
    productsResponse.then((products) => {
      dispatch({ type: 'UPLOAD_PRODUCTS', products })
    })

    taxesResponse.then((taxes) => {
      ipResponse.then((ip) => {
        const tax_rate = taxes.filter(
          (code) => code.countryCode === ip.country_code.toLowerCase()
        )
        let profileCopy = { ...profile }
        profileCopy.taxInfo = {
          countryCode: ip.country_code,
          rate: tax_rate[0].rate,
        }
        dispatch({ type: 'UPDATE_PROFILE', profileCopy })
      })
    })
  }, [])

  const submitOrder = (event) => {
    event.preventDefault()
    const formStateCopy = [...formState]
    formStateCopy[2].orderReview = false
    formStateCopy[3].orderComplete = true
    dispatch({ type: 'UPDATE_FORMSTATE', formStateCopy })
  }

  return (
    <form className={classes.container} onSubmit={submitOrder}>
      <h1>Purchase widget</h1>
      {formState[0].products ? <Products /> : null}
      {formState[1].contacts ? <Contacts /> : null}
      {formState[2].orderReview ? <Checkout /> : null}
      {formState[3].orderComplete ? <OrderComplete /> : null}
    </form>
  )
}
