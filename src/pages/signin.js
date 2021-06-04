import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./signin.css"
import { toast } from 'react-toastify';
import axios from 'axios';


toast.configure()
const SigninPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {

        let body = {
            "email": email,
            "password": password
        }
        axios.post('/signin', body).then((res) => {
            if (res.status == 200) {
                console.log('res',res)
                localStorage.setItem("jwt", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.user))
                //dispatch({type:"USER",payload:data.user})

                toast.success("Successfully Signin")
                history.push('/userprofile')
                window.location.reload()
            } else {
                toast.info(res.error)
            }
        }).catch(err=>{
            toast.info(err)
        })


    }

    return (
        <div>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" alt="" /></Link>


                <div className="login__container">
                    <h1>Sign In</h1>

                    <h5>E-mail</h5>

                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={() => signIn()} className="login__signInButton" type="submit">Sign In</button>

                    <Link to="/signup">
                        <button className="login__registerButton">Create your Soulmate account</button></Link>

                </div>
            </div>
        </div>
    )
}

export default SigninPage;

