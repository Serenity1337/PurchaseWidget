import React, { useState, useEffect } from 'react'
import classes from './Products.module.scss'
import { returnPriceObj } from '../../Utils/HelperFunctions/HelperFunctions'
import { useSelector, useDispatch } from 'react-redux'
import ErrorMsg from '../Shared/ErrorMsg'
import Button from '../Shared/Button'
export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const profile = useSelector((state) => state.profile)
  const formState = useSelector((state) => state.formState)
  const [cart, setCart] = useState([])
  const [checkBoxes, setCheckBoxes] = useState({
    p_1: false,
    p_2: false,
    p_3: false,
    p_4: false,
  })
  const [errorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    const checkBoxesClone = { ...checkBoxes }
    for (let index = 0; index < profile.products.length; index++) {
      checkBoxesClone[profile.products[index].id] = true
    }
    setCheckBoxes(checkBoxesClone)
    setCart(profile.products)
  }, [])

  const goToNextForm = () => {
    let profileCopy = { ...profile }
    let newCart = []
    let formStateCopy = [...formState]
    if (
      !checkBoxes.p_1 &&
      !checkBoxes.p_2 &&
      !checkBoxes.p_3 &&
      !checkBoxes.p_4
    ) {
      setErrorMsg('Please select atleast one product')
    } else {
      for (let index = 0; index < products.length; index++) {
        if (checkBoxes[products[index].id]) {
          newCart.push(products[index])
        }
      }

      profileCopy.products = newCart
      profileCopy = returnPriceObj(profileCopy)

      formStateCopy[0].products = false
      formStateCopy[1].contacts = true

      dispatch({ type: 'UPDATE_PROFILE', profileCopy })
      dispatch({ type: 'UPDATE_FORMSTATE', formStateCopy })
    }
  }

  const checkBoxHandler = (product) => {
    const checkBoxesClone = { ...checkBoxes }
    checkBoxesClone[product.id] = !checkBoxes[product.id]
    setCheckBoxes(checkBoxesClone)
  }

  return (
    <div className={classes.productsContainer}>
      <h1 className={classes.productsHeading}>Please select products.</h1>

      {products
        ? products.map((product, index) => (
            <div key={product.id} className={classes.productsInfoContainer}>
              <div className={classes.productTitleContainer}>
                <input
                  onChange={() => checkBoxHandler(product)}
                  type='checkbox'
                  name={product.id}
                  id={product.id}
                  checked={checkBoxes[product.id]}
                />
                <label htmlFor={product.id} className={classes.productTitle}>
                  {product.title}
                </label>
              </div>
              <span className={classes.productPrice}>
                {product.price.amount} €
              </span>
            </div>
          ))
        : null}
      {errorMsg ? <ErrorMsg msg={errorMsg} /> : null}
      <Button type='' text='Next' onClick={goToNextForm} width='100%' />
    </div>
  )
}
