// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css'

class UserProfile extends Component {
  render() {
    return (
        <div className = "Home">



          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link to="/"> Home </Link>
          <br/>
          <Link to="/LogIn"> Login </Link>
          <br/>
          <Link to="/Debit"> Debit </Link>
          <br/>
          <Link to="/Credit"> Credit </Link>
          <br/>
          <Link to="/AccountBalance"> AccountBalance </Link>

        </div>
    );
  }
}

export default UserProfile;