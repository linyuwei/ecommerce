import React from 'react'

import Directory from '../../components/directory/directory.component'

// import './homepage.styles.scss'
import { HomePageContainer } from './homepage.styles'

export const HomePage = (props) => {
  // console.log(props);
  // {history: {…}, location: {…}, match: {…}, ...}
  return (
    <HomePageContainer className='homepage'>
      <Directory />
    </HomePageContainer>
  )  
}

export default HomePage