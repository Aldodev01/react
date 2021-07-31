import { NavLink } from 'react-router-dom'
import './Bottommenu.css'

const BottomMenu = ()=>{
    return(
        <nav className="bottom_menu">
            <NavLink to='/home' activeClassName="bottom_menu_active">
                    <i className="fab fa-battle-net"></i>
            </NavLink>

            <NavLink to='/about' activeClassName="bottom_menu_active">
                    <i className="fas fa-user-astronaut"></i>
            </NavLink>

            <NavLink to='/contact' activeClassName="bottom_menu_active">
                    <i className="fas fa-phone"></i>
            </NavLink>

            <NavLink to='/showcase' activeClassName="bottom_menu_active">
                    <i className="fab fa-accusoft"></i>
            </NavLink>
        </nav>
    )
}

export default BottomMenu