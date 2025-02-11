import { useState } from 'react';
import logo from '../../assets/logo.png';
import './login.css'

const Login = () => {
    const[signState, setSignState] = useState("Sign In")
    return (
        <div className='login'>
            <img src={logo} alt='company-logo'/>
            <div className='login-form'>
                <h1>{signState}</h1>
                <form>
                    {signState === "Sign Up"? <input type="text" placeholder="Your name" required/> : <></>}
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <button>Sign In</button>
                    <div className="form-help">
                        <div className='remember'>
                            <input type="checkbox"/>
                            <label htmlFor=''>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className='form-switch'>
                    {signState === "Sign In"? <p>New to Netflix? <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span></p> : <p>Already have account? <span onClick={()=> setSignState("Sign In")}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    )
}

export default Login
