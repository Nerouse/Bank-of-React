// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

import './style.css'

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div className = "Home">
        <div className = "header">
          <img src="https://static.thenounproject.com/png/302763-200.png" alt="bank"/>
          <h1>Login</h1>
        </div>


        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
          <Link to="/"> Home </Link>
          <br/>
          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/Debit"> Debit </Link>
          <br/>
          <Link to="/Credit"> Credit </Link>
          <br/>
          <Link to="/AccountBalance"> AccountBalance </Link>

      </div>
    )
  }
}

export default LogIn