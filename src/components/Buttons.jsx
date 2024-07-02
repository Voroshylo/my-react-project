import { useState } from 'react'
import css from '../css/Alert.module.css'


//huki//
const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1)
  }
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return(
    <>
      <p>Current: {clicks}</p>
      <button className={css.btn} onClick={handleToggle}>{ isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <button className={css.btn} onClick={handleClick}>klick</button>}
    </>
  )
}
    
export default Button