import React from "react";
import './NavBar.css'

const NavBar= (props) => {
    return(
        <nav className="navbar">
            <a className="text" href="#home"><h1 style={{margin: '20px'}}>Snap<big className="text-green">Gram</big></h1></a>
        </nav>
    )
}
export default NavBar