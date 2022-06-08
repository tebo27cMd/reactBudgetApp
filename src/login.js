import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Login(){

    const btn={
        width:'190px',
        height:'30px',
        marginTop:'2%'
    }

    let history = useHistory();

    const login=(()=>{

        history.push('/homepage');
    })

    return(
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder="Enter your email"/><br></br>

            <input type="password" placeholder="Enter your password"/>

            <button style={btn} onClick={login}>
                Log in{" "}
            </button>

            <span>Dont have an account</span>{" "} 
            <span>

                 <Link to="/sign-up"> Create account here</Link>
              
             </span>
            </div>
       );  
}
export default Login