import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Debit from './Debit';
import {Link} from 'react-router-dom';
import './style.css'

class Home extends Component {
  render() {
    return (
        <div className = "Home">
        <div className = "header">
          <img src="https://static.thenounproject.com/png/302763-200.png" alt="bank"/>
          <h1>Bank of React</h1>
        </div>

          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/LogIn"> Login </Link>
          <br/>
          <Link to="/Debit"> Debit </Link>
          <br/>
          <Link to="/Credit"> Credit </Link>
          <br/>
          <Link to="/AccountBalance"> AccountBalance </Link>


          <p>Account Balance: {this.props.accountBalance}</p>

        </div>
    );
  }
}

export default Home;