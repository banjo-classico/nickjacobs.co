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
      <div className='section-container' id='single'>
        <div className='single-project'>
          <div className='close' onClick={ this.handleClick.bind(this) }>X</div>
          <div className='project-heading'>
            <h2>{ project.title }</h2>
            <button><a href={ project.github }>GITHUB</a></button>
          </div>
          <div className='project-content-container'>
            <div className='project-content'>
            {
              project.info.map((e) => {
                return (<div>
                          <h3>{e.heading}</h3>
                          <p>{e.text}</p>
                        </div>)
              })
            }
            </div>
            <div className='build'>
              <h2>Built with:</h2>
              {
                project.build.map((image) => {
                  let path = '/images/' + image + '.png'
                  return <img id={image} src={path}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Single