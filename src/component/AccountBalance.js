// src/components/AccountBalance.js

import React, {Component} from 'react';
import './style.css'
class AccountBalance extends Component {
  render() {
    return (
        <div className = "Home">
        <div className = "header">
          <img src="https://static.thenounproject.com/png/302763-200.png" alt="bank"/>
          <h1>Account Balance</h1>
        </div>
          Account Balance: {this.props.accountBalance}

        </div>
    );
  }
}

export default AccountBalance;