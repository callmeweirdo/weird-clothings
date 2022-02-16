import React from 'react';

import { connect } from 'react-redux';

import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';



const CartIcon = ({toggleCartHidden}) => {
    return(<div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon />
        <span className='item-count'>0</span>
    </div>)
}


const MapStateToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, MapStateToProps)(CartIcon);