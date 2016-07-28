import React, { Component } from 'react'
import { intro, past, present } from '../data/about'


class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='about' className='section'>
        <div className='section-container'>
          <img src='/images/1.jpg'/>
          <div>
            <p>{ intro }</p>
            <p>{ past }</p>
            <p>{ present }</p>
          </div>
        </div>
      </div>
      )
  }
}

export default About