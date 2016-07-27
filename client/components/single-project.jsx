import React, { Component } from 'react'
import { smoothScr } from '../scroll'

class Single extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.closeProject()
    smoothScr.anim('portfolio')
  }

  render() {
    const i = this.props.projects.findIndex((project) => project.id === this.props.id)
    console.log(this.props.id)
    const project = this.props.projects[i]
    console.log(project)
    return (
      <div className='single-project' id='single'>
        <div className='close' onClick={ this.handleClick.bind(this) }>X</div>
          <h2>{ project.title }</h2>
          {
            project.info.map((e) => {
              return (<div>
                        <h4>{e.heading}</h4>
                        <p>{e.text}</p>
                      </div>)
            })
          }
          <p>{ project.tech }</p>
      </div>
      )
  }
}

export default Single