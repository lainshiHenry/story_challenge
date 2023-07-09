import React from 'react'

export interface TextReadOnlyProps{
    text: string,
}

const TextReadOnly = ({text}: TextReadOnlyProps) => {
  return (
    <div>TextReadOnly</div>
  )
}

export default TextReadOnly