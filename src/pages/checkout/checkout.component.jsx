import React from 'react';

import {connect} from 'react-redux';

import CheckoutItem from '../../components/check-item/checkout-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => {

    return(
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="checkout-block">
                <span>product</span>
            </div>
            <div className="checkout-block">
                <span>description</span>
            </div>
            <div className="checkout-block">
                <span>quantity</span>
            </div>
            <div className="checkout-block">
                <span>price</span>
            </div>
            <div className="checkout-block">
                <span>remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className="total">
            <span>${total}</span>
        </div>
    </div>
)};


const mapstateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapstateToProps)(CheckoutPage);