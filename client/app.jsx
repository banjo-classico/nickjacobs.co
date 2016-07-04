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
        <footer>Copyright Nick Jacobs 2016</footer>
      </div>
    )
  }
}

export default App