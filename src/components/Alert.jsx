import css from '../css/Alert.module.css'
import { HiUser } from "react-icons/hi";

// import clsx from 'clsx';

// const getBgColor = variant => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

const Alert = ({ name, children }) => {


  return (
    <p className={css.alert}><HiUser className={css.myIcon} size='24'/> {name}
      {children}
      </p>
  
  );
};

export default Alert