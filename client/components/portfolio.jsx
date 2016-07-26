import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='portfolio' className='section'>
        <h1>Portfolio</h1>
        {
          this.props.projects.map((project) => {
            return <Link to={'/single/' + project.id} ><div id={project.id} title={project.title} tech={project.tech} ></div></Link>
          })
        }
      </div>
      )
  }
}

export default Portfolio