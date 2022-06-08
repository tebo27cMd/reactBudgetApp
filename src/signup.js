import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'


function SignUp(){

    const btn={
        width:'190px',
        height:'30px',
        marginTop:'2%'
    }
    
    let history = useHistory();

    const Register=(()=>{

        history.push('/homepage');
    })

    return(
        <div className="container">
            <h1>Register Account</h1>
            <input type="email" placeholder="Enter your email"/>

            <input type="password" placeholder="Enter your password"/>
            
            <button style={btn} onClick= {Register}>Create acount</button>
            </div>
    );
    
      
}
export default SignUp