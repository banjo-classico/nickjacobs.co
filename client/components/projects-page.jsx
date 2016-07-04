import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Box from './box.jsx'


class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='projects'>
        {
          this.props.projects.map((project) => {
            return <Link to={'/single/' + project.id} ><Box id={project.id} title={project.title} tech={project.tech} /></Link>
          })
        }
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

export const ProjectsContainer = connect(
  mapStateToProps,
  actionCreators
  )(Projects)