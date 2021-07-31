import { useState } from "react"
import Menu from "../menu/Menu"
import Modal from "../modal/Modal"
import "./Navbar.css"
import Logo from "../../assets/Logo512.png"


const Navbar = ()=>{

    const [show, setShow] = useState(false)
    const [tabMenu, setTabMenu] = useState(false)
        // show berarti TRUE
    return (
        <>
            {/* TERNARY OPERATION */}
        { show ? (<Modal/>) : null }

        <Menu show={tabMenu} />
        
        <nav className="navbar">
            <img src={Logo} className="LogoAldo" width="50px"/>

            <h3 className="brand">A L D O</h3>
            <span 
                className="material-icons menu" 
                onClick={ ()=>{
                    setShow(!show)
                } }
            >
                horizontal_distribute
            </span>
          
                <span className="material-icons arrow" 
                    onClick = {()=>{
                        setTabMenu(!tabMenu)
                    }}

                >
                    keyboard_arrow_down
                </span>
        </nav>
        </>
    )
}

export default Navbar