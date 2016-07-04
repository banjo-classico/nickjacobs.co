import React, { Component } from 'react'
import InfoSection from './info-section.jsx'

class ProjectInfo extends Component {

  render() {
    return (
      <div>
      {
        this.props.project.info.map((item) => {
          return <InfoSection heading={item.heading} text={item.text}/>
        })
      }
      </div>
      )
  }
}

export default ProjectInfo 