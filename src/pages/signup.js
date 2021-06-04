import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./signup.css";
import { toast } from 'react-toastify';
import axios from 'axios';


toast.configure()
const SignupPage = () => {
    const history = useHistory();
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConPass] = useState('');


    const signup = (e) => {

        if (fname && email && password && confirmPass) {
            if (password === confirmPass) {
                let body = {
                    fname: fname,
                    email: email,
                    password: password
                }
                axios.post('/signup', body).then((res) => {
                    console.log(res)
                    if (res.data.error) {
                        toast.info(res.data.error)
                    } else {
                        toast.success(res.data.message)
                        history.push('/signin')
                    }
                }).catch((err) => {
                    toast.info(err)
                })
            } else {
                toast.error('Password does not match', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        } else {
            toast.error("Please fill all fields.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }


    }


    return (
        <div>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" alt="" /> </Link>


                <div className="login__container">
                    <h1>Sign Up</h1>

                    <h5>Name</h5>

                    <input required type="text" value={fname} onChange={e => setName(e.target.value)} minLength="3" maxLength="15" />

                    <h5>E-mail</h5>

                    <input required type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    {/* <h5>Gender</h5>
                    <select value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select> */}
                    <h5>Password</h5>
                    <input required type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Confirm Password</h5>
                    <input required type="password" value={confirmPass} onChange={e => setConPass(e.target.value)} />

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

