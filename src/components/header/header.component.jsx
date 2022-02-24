import React from 'react';
import { createStructuredSelector } from 'reselect';

// ?styles import
import './header.styles.scss';

// * svg assets import
import { ReactComponent as Logo} from '../../assets/crown.svg';

// ! components import
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase-utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {connect} from 'react-redux';

const Header = ({currentUser, hidden}) => {
    return(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ? 
                <div className='options' onClick={ ()=> auth.signOut() } >SIGN OUT</div>
                :
                <Link className='option' to='/signin' >SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown /> } 
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
