import { useEffect} from 'react'
// import css from '../css/Alert.module.css'
const Obj = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`interval - ${Date.now()}`)
    },2000)
    return () => {
      clearInterval(intervalId)
    };
});

  return<div>Obj</div>
}
export default Obj