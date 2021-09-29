import React, { useState, useEffect } from 'react'
import classes from './Contacts.module.scss'
export const Contacts = ({ values, setValues }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  useEffect(() => {
    setUserInfo(values.profile.contact)
  }, [])
  const inputHandler = (event) => {
    let userInfoCopy = { ...userInfo }
    userInfoCopy[event.target.name] = event.target.value
    setUserInfo(userInfoCopy)
  }
  const goToNextForm = () => {
    const valuesCopy = { ...values }
    valuesCopy.profile.contact = userInfo
    valuesCopy.formState[1].contacts = false
    valuesCopy.formState[2].orderReview = true
    setValues(valuesCopy)
  }
  const goToPrevForm = () => {
    const valuesCopy = { ...values }
    valuesCopy.profile.contact = userInfo
    valuesCopy.formState[1].contacts = false
    valuesCopy.formState[0].products = true
    setValues(valuesCopy)
  }
  const contacts = [
    { name: 'First Name', class: 'firstName' },
    { name: 'Last Name', class: 'lastName' },
    { name: 'Email', class: 'email' },
  ]
  return (
    <div className={classes.contactsContainer}>
      <h1 className={classes.contactsHeading}>
        Please enter your contact details below.
      </h1>
      {contacts.map((contact) => (
        <input
          type='text'
          id={contact.class}
          name={contact.class}
          className={classes[contact.class]}
          onChange={inputHandler}
          placeholder={`Please enter your ${contact.name}`}
          value={userInfo[contact.class]}
        />
      ))}
      <div className={classes.btnContainer}>
        <div className={classes.prevForm} onClick={goToPrevForm}>
          Prev
        </div>
        <div className={classes.nextForm} onClick={goToNextForm}>
          Next
        </div>
      </div>
    </div>
  )
}
