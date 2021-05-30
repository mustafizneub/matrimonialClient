import React from 'react'
import "./matchmake.css"
import { Link } from 'react-router-dom';

const MatchmakePage = () => {
    return (
        <div>
            <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" /></Link>
            

            <div className="login__container">
                <h1>Matchmake</h1>
                <form>
                    <h5>Name</h5>
                    <input type="text" />
                    <h5>Age</h5>
                    <input type="text" />
                    <h5>Town/City</h5>
                    <input type="text" />
                    <h5>Gender</h5>
                    <input type="text" />
                    <h5>Common Interests</h5>
                    <input type="text" />
                    <h5>Religion</h5>
                    <input type="text" />
                    
                    <button type="submit">MATCHMAKE</button>
                </form>

                <p>All results are generated randomly according to your given info</p>


            </div>
        </div>
        </div>
    )
}

export default MatchmakePage;

