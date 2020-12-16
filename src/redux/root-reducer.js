import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // window.localStorage in browser
// import sessionStorage from 'redux-persist/lib/storage/session' // window.sessionStorage in browser

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
  key: 'root', // from the reducer root
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer  
// })