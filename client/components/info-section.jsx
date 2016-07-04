import React, { Component } from 'react'

class InfoSection extends Component {

  render() {
    return (
      <div>
        <h4>{ this.props.heading }</h4>
        <p>{ this.props.text }</p>
      </div>
      )
  }
}

export default InfoSection 