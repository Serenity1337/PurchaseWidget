import React, { useState, useEffect } from 'react'
import { createOrder } from '../../Utils/Api/Api'
import classes from './Checkout.module.scss'
export const Checkout = ({ values, setValues }) => {
  const checkout = () => {
    const initialValues = {
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
    }

    const response = createOrder(values.profile)
    response.then((res) => {
      console.log(res)
    })
    console.log(response)
  }
  const goToPrevForm = () => {}
  return (
    <div className={classes.orderContainer}>
      <h1 className={classes.orderHeading}>Order review</h1>
      <h1 className={classes.productsHeading}>Products</h1>

      {values.profile.products.map((product) => (
        <div className={classes.productInfo}>
          <span className={classes.productName}>{product.title}</span>
          <span className={classes.productPrice}>{product.price.amount} €</span>
        </div>
      ))}
      <h1 className={classes.contactHeading}>Contact</h1>

      <div className={classes.contactInfo}>
        <span className={classes.nameLabel}>Name</span>
        <span className={classes.clientName}>
          {values.profile.contact.firstName} {values.profile.contact.lastName}
        </span>
      </div>

      <h1 className={classes.priceHeading}>Price</h1>

      <div className={classes.netPriceInfo}>
        <span className={classes.productsLabel}>Product&#40;s&#41;</span>
        <span className={classes.netTotal}>
          {values.profile.price.netTotal} €
        </span>
      </div>

      <div className={classes.taxInfo}>
        <span className={classes.taxesLabel}>Taxes</span>
        <span className={classes.taxes}>{values.profile.price.taxes} €</span>
      </div>

      <h1 className={classes.totalHeading}>Total</h1>

      <div className={classes.totalInfo}>
        <span className={classes.taxesLabel}>Taxes</span>
        <span className={classes.grossTotal}>
          {values.profile.price.grossTotal} €
        </span>
      </div>

      <div className={classes.btnContainer}>
        <div className={classes.prevForm} onClick={goToPrevForm}>
          Prev
        </div>
        <div className={classes.checkout} onClick={checkout}>
          Checkout
        </div>
      </div>
    </div>
  )
}
