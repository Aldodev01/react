import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {

    const user = sessionStorage.getItem("user")

    const[show, setShow] = useState(false)

    const handleLogout = () => {
        sessionStorage.removeItem("isLogin")
        window.location.href = "/login"
    }   

    return(
        <>

            {show && (
                <div className="mudalMenu">
                    <button className="btnLogOut" onClick={handleLogout}>
                        <i className="fa fa-close"></i>
                        Log Out
                    </button>
                </div>
            )}

       

        <nav className="navbar">
            <h3 className="brand">A L D O</h3>

            <div className="userArea" onClick={()=>{setShow(!show)}}>
                <i className="fa fa-user-friends"></i>
                   {user}
            </div>
            {/* <div className="navbarMenu">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Showcase</Link>
                <Link to="/">Contact</Link>
            </div> */}
        </nav>

        </>
    )
}

export default Navbar