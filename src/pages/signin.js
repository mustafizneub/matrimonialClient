import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./signin.css"
import { toast } from 'react-toastify';


toast.configure()
const SigninPage = () => {
     const history = useHistory();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const signIn = (e)=> {
        //e.preventDefault();

        //     auth.signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         history.push('/')
        //     })

        //     .catch(error => alert(error.message))
        //FIREBASE LOGIN
        fetch('/signin',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email,password})
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                toast.info(data.error)
            }else{            
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                //dispatch({type:"USER",payload:data.user})
                
                toast.success("Successfully Signin")
                history.push('/userprofile')
            }
        }).catch(e=>console.log(e))
        

        }

    return (
        <div>
            <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" alt="" /></Link>
            

            <div className="login__container">
                <h1>Sign In</h1>
                
                    <h5>E-mail</h5>
                    
                     <input type="text" value={email} onChange= {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password}  onChange= {e => setPassword(e.target.value)}/>
                    
                    <button onClick={()=>signIn()} className="login__signInButton" type="submit">Sign In</button>
                
                <Link to="/signup">
                <button  className="login__registerButton">Create your Soulmate account</button></Link>

            </div>
        </div>
        </div>
    )
}

export default SigninPage;

