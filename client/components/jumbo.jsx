import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Jumbo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='jumbo' className='section'>
        <h1>Jumbo</h1>
      </div>
      )
  }
}

export default Jumbo