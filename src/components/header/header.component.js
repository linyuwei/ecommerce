import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
// import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (  
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser ? (
          // use as='' to display tag
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }    
  </HeaderContainer>  
)

// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
}) // createStructuredSelector() passes the top of state into substate

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })
// state is the root reducer, then connect to userReducer
// currentUser is null from maps to props

export default connect(mapStateToProps)(Header)