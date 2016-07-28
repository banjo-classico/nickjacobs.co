import React, { Component } from 'react'
import { smoothScr } from '../scroll'

class Singlebox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick() {
    this.props.showProject(this.props.id)
    smoothScr.anim('single')
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    return (
      <button className='singlebox' 
              id={this.props.id} 
              onClick={ this.handleClick.bind(this) }
              onMouseEnter={ this.toggleHover.bind(this) }
              onMouseLeave={ this.toggleHover.bind(this) }>
        {
          this.state.hover
          ? <p>{ this.props.project.tech }</p>
          : <h2>{ this.props.project.title }</h2> 
        }
      </button>
      )
  }
}

export default Singlebox