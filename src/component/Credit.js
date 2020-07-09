import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import axios from 'axios';
import './style.css'

class Credit extends Component {

constructor (props){
  super(props);
  this.state = {data: [], 
    newEntry: "", 
    newAmount: 0, 
    Balance: this.props.accountBalance, 
    newDate: '2020-07-01', 
    didEnter: false};

}

//call API
componentDidMount = async () => {
  try{
    let feed = await fetch('https://moj-api.herokuapp.com/credits', {method: 'GET',});
    const result = await feed.json();
    const status = fetch.status;
    if(status === 400){
      console.log(result.error);
    } else{
      this.setState({data:result});
      console.log(this.state);  
    }
  }
  catch(error){
    console.log(error);
  }
  
}


entryChange = (event) => {
  this.setState({newEntry: event.target.value});
}

amountChange = (event) =>{
  let x = event.target.value;
    if(isNaN(x)) {
            this.setState({didEnter: false});
            return;

        }
        else{
          this.setState({didEnter: true});
        }
        this.setState({newAmount: parseInt(event.target.value)});

}



addtoCredit = () => {

  const temp = {
    description: this.state.newEntry,
    amount: this.state.newAmount,
    date: this.state.newDate
  }
  //console.log(temp);
  let newCredit = [];


for(let i = 0; i < this.state.data.length;i++){
    newCredit.push(this.state.data[i]);
}

//if there is a new entry add it to the array
if(this.state.didEnter){
  newCredit.push({
      id:"",
    description: this.state.newEntry,
    amount: this.state.newAmount,
    date: this.state.newDate
               });

}

this.setState({data: newCredit});
    //console.log(x);
}


// displays the table
showData = () => {
  let table = [];

  for(let i = 0; i < this.state.data.length; i++){
    table.push(                         
      <tr>
        Description: {this.state.data[i].description}
        Amount: {this.state.data[i].amount}
        Date: {this.state.data[i].date}
      </tr>
      );
  }

  return table;
}


//when submit is clicked addtoDebit is called and the new balance is updated

handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.newEntry === "" || this.state.newAmount === "") {
      alert("Error, Enter Valid Input");
    }


    this.addtoCredit();

    let x = this.state.newAmount;
    let y = this.state.Balance;
    x+=y;
    console.log("here");
    console.log(x);

    this.setState({Balance: x});

    //console.log(this.state.Balance);
   
    this.props.setBalance(x);
}


  render() {
    const { newEntry } = this.state.newEntry;
    const { newAmount } = this.state.newAmount;
    const {newDate} = this.state.newDate;
    
    return (
        <div className = "Home">
        <div className = "header">
          <img src="https://static.thenounproject.com/png/302763-200.png" alt="bank"/>
          <h1>Debit</h1>
        </div>



          <table>
                {this.showData()}
            </table>


<form onSubmit={this.handleSubmit}>
          <label>Description: </label>
          <input
            type="text"
            onChange={this.entryChange}
            value={newEntry} />
          <label>Amount: </label>
          <input
            type="text"
            onChange={this.amountChange}
            value={newAmount} />

          <label>Date: </label>
          <input
            type="date"
            onChange={event => this.setState({newDate: event.target.value})}
            value= {newDate} />

          <input type="submit" value="Add Credit" />
        </form>

        <p>Account Balance: {this.state.Balance}</p>

           <Link to="/"> Home </Link> 
            <br/>
          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/LogIn"> Login </Link>
          <br/>
          <Link to="/Debit"> Debit </Link>
          <br/>
          <Link to="/AccountBalance"> AccountBalance </Link>
        </div>
    );
  }
}

export default Credit;