import React from 'react'

export interface TextReadOnlyProps{
    text: string,
    textClassList?: string,
}

const TextReadOnly = ({text, textClassList}: TextReadOnlyProps) => {
  return (
    <span className={textClassList}>{text}</span>
  )
}

export default TextReadOnly