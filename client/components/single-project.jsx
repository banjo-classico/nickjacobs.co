import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Main from './main.jsx'
import Sidebar from './sidebar.jsx'


class SingleProject extends Component {
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
        <Main project={ project }/>
        <Sidebar />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    page: state.displayPage,
    projects: state.projects

  }
}

export const SingleProjectContainer = connect(
  mapStateToProps,
  actionCreators
  )(SingleProject)