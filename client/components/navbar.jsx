import React, { Component } from 'react'
import { smoothScr } from '../scroll'


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    smoothScr.anim(e.target.textContent)
  }

  render() {
    return (
      <nav>
        <ul>
          <li onClick={ this.handleClick.bind(this) }>about</li>
          <li onClick={ this.handleClick.bind(this) }>portfolio</li>
          <li onClick={ this.handleClick.bind(this) }>contact</li>
        </ul>
      </nav>
      )
  }
}
 export default Navbar