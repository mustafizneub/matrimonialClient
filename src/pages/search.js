import React from 'react'
import { Link} from 'react-router-dom';
import "./search.css"



const SearchPage = () => {
     

    

    return (
        <div>
            <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" /></Link>
            

            <div className="login__container">
                <h1>Search User</h1>
                <form>
                    <h5>Name</h5>
                    
                     <input type="text" />

                     <h5>City</h5>
                    
                     <input type="text" />

                    <h5>User ID</h5>
                    <input type="text"/>
                    
                    <button  className="login__signInButton" type="submit">Search</button>
                </form>
                

            </div>
        </div>
        </div>
    )
}

export default SearchPage;

