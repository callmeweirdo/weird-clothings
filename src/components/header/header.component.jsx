import React from 'react';

// ?styles import 
import './header.styles.scss';

// * svg assets import
import { ReactComponent as Logo} from '../../asstes/crown.svg'

// ! components import
import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
        </div>
    </div>
    )
}

export default Header;