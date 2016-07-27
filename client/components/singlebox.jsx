import React, { Component } from 'react'
import { smoothScr } from '../scroll'

class Singlebox extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.showProject(this.props.id)
    smoothScr.anim('single')
  }

  render() {
    return (
      <button className='singlebox' id={this.props.id} onClick={ this.handleClick.bind(this) }>
                    <h2>{ this.props.project.title }</h2>
                    <p>{ this.props.project.tech }</p>
                   </button>
      )
  }
}

export default Singlebox