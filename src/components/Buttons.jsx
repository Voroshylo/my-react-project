import { useState, useEffect } from 'react'
import css from '../css/Alert.module.css'


//huki//
const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${clicks} times`
  })
  // const handleClick = () => {
  //   setClicks(clicks + 1)
  // }
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return(
    <>
      <p>Current: {clicks}</p>
      <button className={css.btn} onClick={handleToggle}>{ isOpen ? 'Hide' : 'Show'}</button>
      {isOpen &&
        <button className={css.btn} onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
        
      }
    </>
  )
}
    
export default Button