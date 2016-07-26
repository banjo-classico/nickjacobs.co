import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import About from './about.jsx'
import Jumbo from './jumbo.jsx'
import Portfolio from './portfolio.jsx'
import Single from './single-project.jsx'
import Contact from './contact.jsx'



class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container'>
        <div className='home'>
          <Jumbo />
          <About />
          <div id='divider'>Divider</div>
          {
            (this.props.singleProject.show)
            ? <Single id={ this.props.singleProject.id } projects={ this.props.projects }/>
            : null
          }
          <Portfolio projects={ this.props.projects } showProject={ this.props.showProject }/>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    singleProject: state.singleProject,
    projects: state.projects
  }
}

export const HomeContainer = connect(
  mapStateToProps,
  actionCreators
  )(Home)