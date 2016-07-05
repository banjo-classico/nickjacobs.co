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
          <Link to='single/pitch-in' ><Box id='pitch-in' title='pitch in' type='home'/></Link>
          <Link to='single/ww' ><Box id='ww' title="word's worth" type='home'/></Link>
          <Link to='single/eda' ><Box id='eda' title='Enspiral Dev Academy' type='home'/></Link>
          <Link to='single/njco' ><Box id='njco' title='njco' type='home'/></Link>
          <Icons />
        </div>
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