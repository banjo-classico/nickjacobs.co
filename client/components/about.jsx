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
          <h1>About me</h1>
          <div className='flexbox'>
            <p style={{'border-top': '10px solid #CC0742'}}>{ intro }</p>
            <p style={{'border-top': '10px solid #FFEF22'}}>{ past }</p>
            <p style={{'border-top': '10px solid #7AE1FF'}}>{ present }</p>
          </div>
        </div>
      </div>
      )
  }
}

export default About