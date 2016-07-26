import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'


class Single extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const i = this.props.projects.findIndex((project) => project.id === this.props.params.id)
    console.log(this.props.params.id)
    const project = this.props.projects[i]
    console.log(project)
    return (
      <div className='single-project'>
        Single
      </div>
      )
  }
}

export default Single