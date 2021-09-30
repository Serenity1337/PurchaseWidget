import React from 'react'
import classes from './Button.module.scss'
export const Button = ({ type, onClick, text, width }) => {
  return (
    <button
      className={classes.btn}
      type={type ? type : 'button'}
      onClick={onClick}
      style={{ width: width }}
    >
      {text}
    </button>
  )
}
