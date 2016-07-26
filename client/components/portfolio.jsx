import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    this.props.showProject(e.target.id)
  }

  render() {
    return (
      <div id='portfolio' className='section'>
        <h1>Portfolio</h1>
        <div className='flexbox'>
        {
          this.props.projects.map((project) => {
            return <button className='singlebox' id={project.id} onClick={ this.handleClick.bind(this) }>
                    <h2>{ project.title }</h2>
                    <p>{ project.tech }</p>
                   </button>
          })
        }
        </div>
      </div>
      )
  }
}

export default Portfolio