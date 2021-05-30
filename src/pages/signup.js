import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./signup.css";
import { toast } from 'react-toastify';


toast.configure()
const SignupPage = () => {
    const history = useHistory();
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');


    const signup = (e) => {
        // e.preventDefault();

        // auth.createUserWithEmailAndPassword(email, password)
        // .then((auth)=>{
        //     console.log(auth);
        //     if (auth) {
        //         history.push('/')
        //     }
        // })

        // .catch(error => alert(error.message))

        //FIREBASE REGISTER

        fetch('http://localhost:4000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, gender, password
            })
        }).then(res => res.json())
            .then(user => {
                if (user.error) {
                    toast.info(user.error)
                } else {
                    toast.success(user.message)
                    history.push('/signin')
                }
            })
            .catch(e => console.log(e))

    }


    return (
        <div>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" alt="" /> </Link>


                <div className="login__container">
                    <h1>Sign Up</h1>

                    <h5>Name</h5>

                    <input type="text" value={fname} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>

                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Gender</h5>
                    <select value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Confirm Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={() => signup()} className="login__signInButton">Sign Up</button>

                    <p>By signing-up you agree to Soulmate's
                    Conditions of Use & Sale. Please see our Privacy Notice,
                our Cookies Notice and or Interest-Based Ads Notice</p>



                </div>
            </div>
        </div>
    )
}

export default SignupPage;

