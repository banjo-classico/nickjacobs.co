import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Nav from './navbar.jsx'
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
        <Nav />
        <div className='home'>
          <Jumbo />
          <div className='divider'></div>
          <About />
          <div className='pineapple-divider'></div>
          {
            (this.props.singleProject.show)
            ? <Single id={ this.props.singleProject.id } 
                      projects={ this.props.projects }
                      closeProject={ this.props.closeProject }/>
            : null
          }
          <Portfolio projects={ this.props.projects } showProject={ this.props.showProject }/>
          <div className='face-divider'></div>
          <Contact />
          <footer>Copyright 2016 - Nick Jacobs</footer>
          <div className='bottom'></div>
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