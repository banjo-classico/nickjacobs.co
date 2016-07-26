import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='about' className='section'>
        <h1>About</h1>
      </div>
      )
  }
}

export default About