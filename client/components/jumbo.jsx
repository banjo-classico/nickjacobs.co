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
      <section id='jumbo'>
        <h1>Jumbo</h1>
      </section>
      )
  }
}

export default Jumbo