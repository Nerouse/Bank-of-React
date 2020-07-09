import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home';
import UserProfile from './component/UserProfile';
import LogIn from './component/Login'
import Debit from './component/Debit'
import Credit from './component/Credit'
import AccountBalance from './component/AccountBalance'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

// allows us to update parent from child componet(account balance) 
setBalance = (newBalance) => {
this.setState({accountBalance: newBalance});
console.log(newBalance);
console.log(this.state);


}



  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitComponent = () => ( <Debit accountBalance={this.state.accountBalance} setBalance={this.setBalance}/>);
    const CreditComponent = () => ( <Credit accountBalance={this.state.accountBalance} setBalance={this.setBalance}/>);
    const AccountBalanceComponent = () => (<AccountBalance accountBalance={this.state.accountBalance} />)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/Debit" render={DebitComponent}/>
            <Route exact path="/Credit" render={CreditComponent}/>
            <Route exact path="/AccountBalance" render={AccountBalanceComponent}/>


          </div>
        </Router>
    );
  }

}

export default App;