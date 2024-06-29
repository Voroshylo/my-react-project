import '../css/Alert.css'
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

export const Alert = ({ name, children }) => {

  return (
    <p className={CSS.alert}><HiUser className='my-icon' size='24'/> {name}
      {children}
    </p>
  );
};