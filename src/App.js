
import './App.css';
import React, {useState} from 'react'
import Home from './homepage'
import Forgot from './forgot';
import Login from './login';
import SignUp from './signup';

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

function App() {

  const [transaction, setTransaction] = useState ([]);

  const AddTransaction = ((amount, item, transactionType)=>{
      
    setTransaction((items)=>[...items,{
      amount:amount,
      item:item,
      transactionType:transactionType

    }])
    console.log(transaction) ;
  
  })
 
  return (

    <Router>
      <Switch>
        <Route exact path="/"component={Login}></Route>
        <Route path="/sign-up"component={SignUp}></Route>
        <Route path="/forgot"component={Forgot}></Route>

        <Route path="/homepage">
        <Home    list={transaction} add={AddTransaction}/>
        </Route>
      </Switch>
    </Router>

  
  );
}

export default App;
