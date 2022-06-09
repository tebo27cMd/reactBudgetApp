import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../src/config/firebase'

function Forgot(){

    const [email,setEmail]=useState('');


    const btn={
        width:'190px',
        height:'30px',
        marginTop:'2%'
    }

    let history = useHistory();

    const forgot=(()=>{

        sendPasswordResetEmail(email,).then(()=>{
            h.alert("Email has been sent to you, Please check and verify")
        }).catch((error)=>{
                console.log(error);
        })

     
    })

    return(
        <div className="container">
            <h1>Forgot Password ?</h1>
                  
            <p>Please enter email address to recieve reset link</p>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            
            <button style={btn} onClick={forgot}>
                Reset Password{" "}
            </button>           
            </div>
       );  
}
export default Forgot