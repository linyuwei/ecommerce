import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

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

function App() {
  return (    
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
        <Route exact path='/blog/topics' component={TopicsList} />
        <Route path='/blog/topics/:topicId' component={TopicDetail} /> */}

      </switch>
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

export default App;