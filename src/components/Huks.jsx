import { useRef, forwardRef, useEffect } from 'react'
import css from '../css/Huks.module.css'

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play()

  const pause = () => playerRef.current.pause()
  
  return (
    <div className={css.div}>
      <video ref={playerRef} src="<http://media.w3.org/2010/05/sintel/trailer.mp4>">
        Sorry, you browser does not support
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={ pause}>pause</button>
      </div>
    </div>
  )
}

export default Player