import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Box from './box.jsx'

const data = {
  pitch: {id: 'pitch',
          text: 'pitch in',
          info: 'An app for increasing volunteer engagement with micro-volunteer opportunites.'},
  ww: {id: 'ww',
       text: "word's worth",
       info: 'This is a project I started at EDA. It is a game to encourage thinking about words and semantics, using a semantic similiarity comparison.'},
  eda: {id: 'eda',
        text: 'Enspiral Dev Academy',
        info: 'EDA runs an intensive bootcamp training for web development.'},
  njco: {id: 'njco',
         text: 'nickjacobs.co',
         info: 'This project was to create the site you are currently on.'}
}


class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='projects'>
        <Box id={data.pitch.id} text={data.pitch.text} info={data.pitch.info} />
        <Box id={data.ww.id} text={data.ww.text} info={data.ww.info} />
        <Box id={data.eda.id} text={data.eda.text} info={data.eda.info} />
        <Box id={data.njco.id} text={data.njco.text} info={data.njco.info} />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    page: state.displayPage
  }
}

export const ProjectsContainer = connect(
  mapStateToProps,
  actionCreators
  )(Projects)