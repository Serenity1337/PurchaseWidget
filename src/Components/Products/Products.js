import React, { useState } from 'react'
import classes from './Products.module.scss'
export const Products = ({ values, setValues }) => {
  const [cart, setCart] = useState([])
  const inputHandler = (event) => {
    let cartCopy = [...cart]
    console.log(event.target.checked)
    console.log(values, setValues)
    if (event.target.checked) {
      cartCopy.push(event.target.name)
    } else {
      cartCopy.filter((cartItem) => cartItem === event.target.name)
    }
    setCart(cartCopy)
  }
  const goToNextForm = () => {
    const valuesCopy = { ...values }
    valuesCopy.profile.products = cart
    valuesCopy.formState[0].products = false
    valuesCopy.formState[1].contacts = true
    setValues(valuesCopy)
  }
  return (
    <div className={classes.productsContainer}>
      <h1 className={classes.productsHeading}>Please select products.</h1>

      {values.allProducts
        ? values.allProducts.map((product, index) => (
            <div key={product.id} className={classes.productsInfoContainer}>
              <div className={classes.productTitleContainer}>
                <input
                  onChange={inputHandler}
                  type='checkbox'
                  name={product.id}
                  id={product.id}
                />
                <label for={product.id} className={classes.productTitle}>
                  {product.title}
                </label>
              </div>
              <span className={classes.productPrice}>
                {product.price.amount} €
              </span>
            </div>
          ))
        : null}
      <div className={classes.nextForm} onClick={goToNextForm}>
        Next
      </div>
    </div>
  )
}
