import React,{useState} from "react"
import "../src/css/add.css"
import {db} from '../src/config/firebase';
import{addDoc ,collection } from 'firebase/firestore'

//add items //
function AddItem(props){
    const [amount, setAmount]= useState('')
    const [item, setItem]= useState('')
    const [transactionType, setTransactionType]= useState('')

    const add =(()=>{

    const collectionReF = collection(db,"transaction");

    const transaction={
        item:item,
        amount:amount,
        transactionType:transactionType,
    };
    addDoc(collectionReF,transaction).then(()=>{
        alert("item added successfully")
    }).catch((error)=>{
        console.log(error);
    })
  
    props.add (amount,item,transactionType) ;
    })

    
    return(
        <div>
            <h2 >Add Transaction</h2>
         <input placeholder="Enter item" onChange={(e)=>setItem(e.target.value)}  /><br></br>
         <input placeholder="Enter amount"onChange={(e)=>setAmount(e.target.value)}  /><br></br>

          <select onChange={(e)=>setTransactionType(e.target.value)} >
              <option value ="Income">Income</option>
              <option value="Expense">Expense</option>
          </select><br></br>

          <button id="btn"  onClick={add}>add</button>

        </div>
    )
}

export default AddItem;