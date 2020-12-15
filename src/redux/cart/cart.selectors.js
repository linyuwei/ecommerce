import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart], // input
  cart => cart.cartItems // ouput: craete, memorize selector
)
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  )
)