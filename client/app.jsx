import React, { Component } from 'react'
import { NavbarContainer } from './components/navbar.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        { this.props.children }
        <footer>Copyright 2016 - Nick Jacobs</footer>
      </div>
    )
  }
}

export default App