import CartActionTypes from './cart.types'

const INITIAL_STATE = {
  hidden: true
}

const CartIconReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: // 'TOGGLE_CART_HIDDEN'
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default CartIconReducer