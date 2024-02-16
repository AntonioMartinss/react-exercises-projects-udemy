// 2 - links com react router
import "./NavBar.css"

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        {/* 8 - Link ativo */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {/* NavLink auto interpreta a classe .active no CSS
        podemo fazer também da seguinte forma... */}
        
        {/* <NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}>
          Home
        </NavLink> */}
    </nav>
  )
}

export default NavBar