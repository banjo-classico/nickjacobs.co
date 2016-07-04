import React, { Component } from 'react'
import SingleTitle from './single-title.jsx'
import ProjectInfo from './project-info.jsx'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main-box'>
        <SingleTitle title={ this.props.project.title} />
        <ProjectInfo project={this.props.project} />
      </div>
      )
  }
}

export default Main 