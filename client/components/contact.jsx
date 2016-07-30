import React, { Component } from 'react'


class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='contact' className='section'>
        <h1>Send me an email or hit me up on social media...</h1>
        <div className='iconbox'>
          <a href='mailto:nick.mjac@gmail.com'><i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href='https://github.com/nick-jacobs'><i className="fa fa-github" aria-hidden="true"></i></a>
          <a href='https://nz.linkedin.com/in/nickmjacobs'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href='https://twitter.com/banjo_classico'><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
      )
  }
}

export default Contact