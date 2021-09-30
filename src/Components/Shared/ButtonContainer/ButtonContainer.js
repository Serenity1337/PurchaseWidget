import React from 'react'
import classes from './ButtonContainer.module.scss'
import Button from '../Button'
export const ButtonContainer = ({ firstBtn, secondBtn }) => {
  return (
    <div className={classes.btnContainer}>
      <Button
        type={firstBtn.type ? firstBtn.type : ''}
        text={firstBtn.text}
        onClick={firstBtn.onClick}
        width='40%'
      />
      <Button
        type={secondBtn.type ? secondBtn.type : ''}
        text={secondBtn.text}
        onClick={secondBtn.onClick}
        width='40%'
      />
    </div>
  )
}
