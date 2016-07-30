import React, { Component } from 'react'
import Singlebox from './singlebox.jsx'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='portfolio' className='section'>
        <h1>Portfolio</h1>
        <div className='flexbox'>
        {
          this.props.projects.map((project) => {
            return <Singlebox id={ project.id } 
                              project={ project } 
                              showProject={ this.props.showProject } />
          })
        }
        </div>
      </div>
      )
  }
}

export default Portfolio