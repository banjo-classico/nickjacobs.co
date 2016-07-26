import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'


class Single extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.closeProject()
  }

  render() {
    const i = this.props.projects.findIndex((project) => project.id === this.props.id)
    console.log(this.props.id)
    const project = this.props.projects[i]
    console.log(project)
    return (
      <div className='single-project'>
        <div className='close' onClick={ this.handleClick.bind(this) }>X</div>
        { this.props.id }
      </div>
      )
  }
}

export default Single