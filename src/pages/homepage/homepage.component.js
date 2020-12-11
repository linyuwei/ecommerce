import React from 'react'

import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss'

export const HomePage = (props) => {
  console.log(props); // {history: {…}, location: {…}, match: {…}, staticContext: undefined}

  return (
    <div className='homepage'>
      <Directory />
    </div>
  )
  
}


export default HomePage