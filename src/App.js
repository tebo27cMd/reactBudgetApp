
import './App.css';
import React, {useState,useEffect} from 'react'
import Home from './homepage'
import Forgot from './forgot';
import Login from './login';
import SignUp from './signup';
import Budgetbalance from './balance';

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import{collection,getDocs} from 'firebase/firestore';

function App() {

  const [transaction, setTransaction] = useState ([]);

  useEffect(()=>{
   
    
  })

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
