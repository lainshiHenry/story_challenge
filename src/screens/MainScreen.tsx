import React from 'react'
import TextReadOnly from '../components/TextReadOnly'
import Button from '../components/Button'
import './MainScreen.css'

const MainScreen = () => {
  return (
    <div className='MainScreen'>
        <span>Make a story that must use these 3 elements.</span>
        <TextReadOnly text={'sample'}/>
        <TextReadOnly text={'sample'}/>
        <TextReadOnly text={'sample'}/>
        <Button buttonText='Randomize' />
    </div>
  )
}

export default MainScreen