import React, { Component } from 'react'
import Login from '../components/Auth/Login-old'

class AuthComponent extends React.Component {
  isLogIn () {
    return this.props.isLogIn
  }

  render () {
    return (
      <div>
        {this.isLogIn === true ? <Component {...this.props} /> : <Login/>}
      </div>
    )
  }
}

export default AuthComponent
