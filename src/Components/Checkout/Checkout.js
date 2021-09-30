import React from 'react'
import classes from './Checkout.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonContainer } from '../Shared/ButtonContainer/ButtonContainer'
export const Checkout = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const formState = useSelector((state) => state.formState)
  const goToPrevForm = () => {
    const formStateCopy = [...formState]
    formStateCopy[2].orderReview = false
    formStateCopy[1].contacts = true
    dispatch({ type: 'UPDATE_FORMSTATE', formStateCopy })
  }
  const firstBtn = {
    type: '',
    text: 'Prev',
    onClick: goToPrevForm,
  }
  const secondBtn = {
    type: 'submit',
    text: 'Checkout',
  }
  return (
    <div className={classes.orderContainer}>
      <h1 className={classes.orderHeading}>Order review</h1>
      <h1 className={classes.productsHeading}>Products</h1>

      {profile.products.map((product) => (
        <div className={classes.productInfo}>
          <span className={classes.productName}>{product.title}</span>
          <span className={classes.productPrice}>{product.price.amount} €</span>
        </div>
      ))}
      <h1 className={classes.contactHeading}>Contact</h1>

      <div className={classes.contactInfo}>
        <span className={classes.nameLabel}>Name</span>
        <span className={classes.clientName}>
          {profile.contact.firstName} {profile.contact.lastName}
        </span>
      </div>

      <h1 className={classes.priceHeading}>Price</h1>

      <div className={classes.netPriceInfo}>
        <span className={classes.productsLabel}>Product&#40;s&#41;</span>
        <span className={classes.netTotal}>{profile.price.netTotal} €</span>
      </div>

      <div className={classes.taxInfo}>
        <span className={classes.taxesLabel}>Taxes</span>
        <span className={classes.taxes}>{profile.price.taxes} €</span>
      </div>

      <h1 className={classes.totalHeading}>Total</h1>

      <div className={classes.totalInfo}>
        <span className={classes.taxesLabel}>Taxes</span>
        <span className={classes.grossTotal}>{profile.price.grossTotal} €</span>
      </div>
      <ButtonContainer firstBtn={firstBtn} secondBtn={secondBtn} />
    </div>
  )
}
