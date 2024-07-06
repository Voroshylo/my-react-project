import { useEffect} from 'react'
// import css from '../css/Alert.module.css'
const Obj = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`interval - ${Date.now()}`)
    })
    return () => {
      clearInterval(intervalId)
    };
});

  return<div>Obj</div>
}
// export default Obj