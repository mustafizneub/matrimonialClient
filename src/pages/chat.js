import React from 'react'
import './chat.css'
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/5.jpg';
const chat = () => {
    return (
        <div class="grid-container">
        <div class="header">
            <div class="myself">
                <div>
                    <img src={one} alt="" width="50px" height="50px"/>
                </div>
            </div>
            <div class="chat-board">
                <div class="chat-left">
                    <div>
                        <img src={two} alt="" width="50px" height="50px"/>
                    </div>
                    <div class="info">
                        <h3>Tayef Ahmed</h3>
                         <p>last seen:8:444pm</p>
                    </div>
                </div>
                <div class="chat-right">
                    <div class="icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="icon">
                        <i class="fas fa-video"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-bar">
            <input type="text" name="search" value="Search"/>
            <div class="chat-self">
                <div>
                    <img src={two} alt="" width="50px" height="50px"/>
                </div>
                <div class="chat-text">
                    <h3>Tayef Ahmed</h3>
                     <p>Hello Dipraj,kita obsta</p>
                </div>
            </div>

            <div class="chat-self">
                <div>
                    <img src={one} alt="" width="50px" height="50px"/>
                </div>
                <div class="chat-text">
                    <h3>SM Shah</h3>
                     <p>kita obsta?</p>
                </div>
            </div>
           
            <div class="chat-self">
                <div>
                    <img src={four} alt="" width="50px" height="50px"/>
                </div>
                <div class="chat-text">
                    <h3>MM Hussain</h3>
                     <p>Vala ni?</p>
                </div>
            </div>
           
            <div class="chat-self">
                <div>
                    <img src={three} alt="" width="50px" height="50px"/>
                </div>
                <div class="chat-text">
                    <h3>SSSSS</h3>
                     <p>Oh</p>
                </div>
            </div>
           
           
        </div>
        <div class="chat">
            
                <div class="self-content-left">
                    <img src={three} alt="" width="50px" height="50px"/>
                    <p>Kita obosta?</p>
                </div>
                <div class="self-content-right">
                   <div class="content">
                        <p>Ai tho valo.</p>
                        <img src={one} alt="" width="50px" height="50px"/>
                   </div>
                </div>
                <div class="message">
                    <div>
                        <input type="text" placeholder="Write something..."/>
                    </div>
                    
                </div>
        </div>
    </div>
    )
}

export default chat
