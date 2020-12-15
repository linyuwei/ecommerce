import React from 'react'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = ({ cart: { cartItems } }) => {
const mapStateToProps = state => {
  // console.log('I am being called') // reduce() always calls
  return {
    itemCount: selectCartItemsCount(state)
    // itemCount: cartItems.reduce(
    //   (acc, cartItem) => acc + cartItem.quantity,
    //   0
    // )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)