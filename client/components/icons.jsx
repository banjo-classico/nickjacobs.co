import React, { Component } from 'react'
import Icon from './icon.jsx'

const icons = [{type: 'fa fa-envelope', link:'mailto:nick.mjac@gmail.com'}, {type: 'fa fa-github', link: 'https://www.github.com/nick-jacobs'}, {type: 'fa fa-linkedin', link: 'https://nz.linkedin.com/in/nickmjacobs'}, {type: 'fa fa-twitter', link: 'https://twitter.com/endotemjay'} ]

class Icons extends Component {

  render() {
    return (
      <div id='icons'>
        {
          icons.map((item) => {
            return <Icon type={item.type} link={item.link} />
          })
        }
      </div>
      )
  }
}

export default Icons 