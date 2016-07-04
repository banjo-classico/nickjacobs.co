import React, { Component } from 'react'
import Logos from './logos.jsx'

class Sidebar extends Component {

  render() {
    return (
      <div>
        <h4>Built with:</h4>
        <Logos />
      </div>
      )
  }
}

export default Sidebar 