import React, { Component } from 'react'

class Icon extends Component {

  render() {
    return (
      <a href={this.props.link}><i className={this.props.type} aria-hidden='true'></i></a>
      )
  }
}

export default Icon 