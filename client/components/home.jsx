import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Box from './box.jsx'
import Icons from './icons.jsx'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id='home'>
          <Box id='pitch' text='pitch in' type='home'/>
          <Box id='ww' text="word's worth" type='home'/>
          <Box id='eda' text='Enspiral Dev Academy' type='home'/>
        </div>
        <Icons />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    page: state.displayPage
  }
}

export const HomeContainer = connect(
  mapStateToProps,
  actionCreators
  )(Home)