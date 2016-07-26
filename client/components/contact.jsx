import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='contact' className='section'>
        <h1>Contact</h1>
      </div>
      )
  }
}

export default Contact