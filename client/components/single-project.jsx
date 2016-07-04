import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class SingleProject extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>This is Single project</div>
      )
  }
}

function mapStateToProps(state) {
  return {
    page: state.displayPage
  }
}

export const SingleProjectContainer = connect(
  mapStateToProps,
  actionCreators
  )(SingleProject)