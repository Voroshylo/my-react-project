import { Routes, Route, NavLink } from "react-router-dom";
import Home from './Home'
import About from "./About";
import Products from "./Products";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active)

const Routers = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Products'>Products</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products/>}/>
      </Routes>
    </div>
  )
}
export default Routers