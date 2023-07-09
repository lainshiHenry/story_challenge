import React from 'react'

export interface ButtonProps{
    buttonText: string,
    buttonIconSrc?: string,
    buttonOnClick?: VoidFunction,
    buttonClassList?: string,
}

const Button = ({buttonText, buttonIconSrc, buttonOnClick, buttonClassList} : ButtonProps) => {
  return (
    <button className={buttonClassList} onClick={buttonOnClick}>
        <img alt='' role='presentation' src={buttonIconSrc}></img>
        <span>{buttonText}</span>
    </button>
  )
}

export default Button