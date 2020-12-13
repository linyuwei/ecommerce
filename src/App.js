import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'

import './App.css';

// const TopicsList = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
//       <Link to={`${props.match.url}/14`}>TO TOPIC 14</Link>
//       <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link>
//     </div>
//   )
// }

// const TopicDetail = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <Link to='/topics'>Topics</Link>
//       <button onClick={() => { props.history.push('/topics')}}>Topics</button>
//       <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          console.log({snapShot: snapShot.data()})

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state.currentUser))
        })
      } else {
        this.setState({ currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  } 
  
  render() {
    return (    
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          {/* <Route exact path='/topics' component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} />
          <Route exact path='/blog/topics' component={TopicsList} />
          <Route path='/blog/topics/:topicId' component={TopicDetail} /> */}
        </Switch>
      </div>

      // <div>
      //   <Route exact path='/' component={HomePage} />
      //   <Route path='/hats' component={HatsPage} />
      // </div>

      // <div className='App'>
      //   <HomePage />
      // </div>
    )
  }  
}

export default App;