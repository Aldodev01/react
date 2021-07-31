import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = ({show})=>{
    return(
        <div className="tab_menu" style={{
            // display : show ? 'flex' : 'none',
            transform : show ? 'translateY(0)' : 'translateY(-65vh)'
        }}>
            <NavLink to='/about' className='span' activeClassName='span_active'>
                About
            </NavLink>
            <NavLink to='/contact' className='span' activeClassName='span_active'>
                Contact
            </NavLink>
            <NavLink to='/showcase' className='span' activeClassName='span_active'>
                Showcase
            </NavLink>
            <NavLink to='/home' className='span' activeClassName='span_active'>
                Home
            </NavLink>
        </div>
    )
}

export default Menu