import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Shared/Button'
export const OrderComplete = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const formState = useSelector((state) => state.formState)
  const newOrder = () => {
    const profileCopy = { ...profile }
    const formStateCopy = [...formState]
    formStateCopy[3].orderComplete = false
    formStateCopy[0].products = true
    profileCopy.contact = { firstName: '', lastName: '', email: '' }
    profileCopy.price = {}
    profileCopy.products = []

    dispatch({ type: 'UPDATE_PROFILE', profileCopy })
    dispatch({ type: 'UPDATE_FORMSTATE', formStateCopy })
  }
  return (
    <div>
      <h1>Your order is completed</h1>
      <Button
        text='Would you like to make a new order?'
        onClick={newOrder}
        width='100%'
      />
    </div>
  )
}
