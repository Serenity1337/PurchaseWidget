import React, { useState, useEffect } from 'react'
import classes from './Products.module.scss'
export const Products = ({ values, setValues }) => {
  const [cart, setCart] = useState([])
  const [checkBoxes, setCheckBoxes] = useState({
    p_1: false,
    p_2: false,
    p_3: false,
    p_4: false,
  })

  useEffect(() => {
    const checkBoxesClone = { ...checkBoxes }
    for (let index = 0; index < values.profile.products.length; index++) {
      checkBoxesClone[values.profile.products[index]] = true
    }
    setCheckBoxes(checkBoxesClone)
    setCart(values.profile.products)
  }, [])

  const goToNextForm = () => {
    const valuesCopy = { ...values }
    const cartCopy = [...cart]
    for (let index = 0; index < values.allProducts.length; index++) {
      if (checkBoxes[values.allProducts[index].id]) {
        cartCopy.push(values.allProducts[index].id)
      }
    }
    valuesCopy.profile.products = cartCopy
    valuesCopy.formState[0].products = false
    valuesCopy.formState[1].contacts = true
    setValues(valuesCopy)
  }

  const checkBoxHandler = (product) => {
    const checkBoxesClone = { ...checkBoxes }
    checkBoxesClone[product.id] = !checkBoxes[product.id]
    setCheckBoxes(checkBoxesClone)
  }

  return (
    <div className={classes.productsContainer}>
      <h1 className={classes.productsHeading}>Please select products.</h1>

      {values.allProducts
        ? values.allProducts.map((product, index) => (
            <div key={product.id} className={classes.productsInfoContainer}>
              <div className={classes.productTitleContainer}>
                <input
                  onChange={() => checkBoxHandler(product)}
                  type='checkbox'
                  name={product.id}
                  id={product.id}
                  checked={checkBoxes[product.id]}
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
