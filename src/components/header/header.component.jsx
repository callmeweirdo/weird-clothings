import React from 'react';

// ?styles import 
import './header.styles.scss';

// * svg assets import
<<<<<<< HEAD
import { ReactComponent as Logo} from '../../asstes/crown.svg'
=======
import { ReactComponent as Logo} from '../../asstes/crown.svg';
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)

// ! components import
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase-utils';

<<<<<<< HEAD
=======
import {connect} from 'react-redux';

>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
const Header = ({currentUser}) => {
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

        </div>
    </div>
    )
}

<<<<<<< HEAD
export default Header;
=======
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
