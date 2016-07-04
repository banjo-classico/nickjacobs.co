import React, { Component } from 'react'
import Title from './title.jsx'
import SmallTitle from './small-title.jsx'
import ProjectInfo from './project-info.jsx'

class Box extends Component {

  render() {
    return (
      <div className='box' id={ this.props.id }>
      {
        (this.props.type === 'home')
        ? <Title text={ this.props.text } />
        : (
          <div>
            <SmallTitle text={ this.props.text } />
            <ProjectInfo text={ this.props.info } />
          </div>
          )
      }
      </div>
      )
  }
}

export default Box 