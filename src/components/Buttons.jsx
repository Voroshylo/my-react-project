import { useState, useEffect } from 'react'
import css from '../css/Alert.module.css'


//huki//
const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    window.localStorage.setItem('save click', clicks)
  },[clicks])
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
      <button className={css.btn} onClick={()=>setClicks(0)}>Reset</button>
    </>
  )
}
    
export default Button