import React, { useState, useEffect } from 'react'
import classes from './Contacts.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import ErrorMsg from '../Shared/ErrorMsg'
import { ButtonContainer } from '../Shared/ButtonContainer/ButtonContainer'
export const Contacts = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const formState = useSelector((state) => state.formState)
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const [errorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    setUserInfo(profile.contact)
  }, [])
  const inputHandler = (event) => {
    let userInfoCopy = { ...userInfo }
    userInfoCopy[event.target.name] = event.target.value
    setUserInfo(userInfoCopy)
  }
  const goToNextForm = () => {
    const profileCopy = { ...profile }
    const formStateCopy = [...formState]

    if (!userInfo.firstName || !userInfo.lastName || !userInfo.email) {
      setErrorMsg('All fields are required')
    } else {
      profileCopy.contact = userInfo

      formStateCopy[1].contacts = false
      formStateCopy[2].orderReview = true

      dispatch({ type: 'UPDATE_PROFILE', profileCopy })
      dispatch({ type: 'UPDATE_FORMSTATE', formStateCopy })
    }
  }
  const goToPrevForm = () => {
    const profileCopy = { ...profile }
    const formStateCopy = [...formState]

    profileCopy.contact = userInfo

    formStateCopy[1].contacts = false
    formStateCopy[0].products = true

    dispatch({ type: 'UPDATE_PROFILE', profileCopy })
    dispatch({ type: 'UPDATE_FORMSTATE', formStateCopy })
  }
  const contacts = [
    { name: 'First Name', class: 'firstName' },
    { name: 'Last Name', class: 'lastName' },
    { name: 'Email', class: 'email' },
  ]
  const firstBtn = {
    type: '',
    text: 'Prev',
    onClick: goToPrevForm,
  }
  const secondBtn = {
    type: '',
    text: 'Next',
    onClick: goToNextForm,
  }
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
      {errorMsg ? <ErrorMsg msg={errorMsg} /> : null}
      <ButtonContainer firstBtn={firstBtn} secondBtn={secondBtn} />
    </div>
  )
}
