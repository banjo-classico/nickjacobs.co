import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <ul>
          <Link to='/'><li>home</li></Link>
          <Link to='/projects'><li>projects</li></Link>
          <Link to='#'><li>about</li></Link>
          <Link to='#'><li>contact</li></Link>
        </ul>
      </nav>
      )
  }
}

function mapStateToProps(state) {
  return {}
}

export const NavbarContainer = connect(
  mapStateToProps,
  actionCreators
  )(Navbar)