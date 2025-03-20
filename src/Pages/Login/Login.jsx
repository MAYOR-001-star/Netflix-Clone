import { useState } from 'react';
import logo from '../../assets/logo.png';
import './login.css';
import { signin, signup } from '../../firebase'; 
import netflix_spinner from '../../assets/netflix_spinner.gif';


const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const userAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (signState === "Sign In") {
            await signin(email, password);
        } else {
            await signup(name, email, password); // Fixed argument order
        }
        setLoading(false);

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        loading?<div className='loading'>
            <img src={netflix_spinner} alt='netflix-loading-image'/>
        </div> :
        <div className='login'>
            <img src={logo} alt='company-logo'/>
            <div className='login-form'>
                <h1>{signState}</h1>
                <form>
                    {signState === "Sign Up" && 
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Your name" 
                            required
                        />
                    }
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required
                    />
                    <button onClick={userAuth} type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className='remember'>
                            <input type="checkbox"/>
                            <label>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className='form-switch'>
                    {signState === "Sign In" ? 
                        <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p> 
                        : 
                        <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
