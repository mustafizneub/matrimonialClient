import React, { useState } from 'react'
import './chat.css'
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/5.jpg';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Chat = () => {
    let history = useHistory()
    if (localStorage.getItem('user') == undefined) {
        history.push('/signin');
        toast.error('Please Login with your account', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const [userData, getUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [messages, getMessages] = useState({})
    const [conversation, getconversation] = useState(getConversation());
    const [text, setText] = useState();
    console.log(conversation, messages)

    function getConversation() {
        let data = []
        axios.get(`/conversation/${userData._id}`).then(res => {
            if (res.data.statusCode == 200) {
                data = res.data.body
                console.log(res)
                if (data.length > 0) {
                    getMessages(data[0])
                }
            }

        }).catch(err => {
            data = []
        })
        return data
    }

    function userSerach(event) {
        if(event.keyCode === 13){
            axios.get('/search').then(res=>{
                if(res.data.statusCode == 200){
                    conversation.push(res.data.body)
                }
            })
        }
    }

    return (
        <div className="grid-container">
            <div className="header">
                <div className="myself">
                    <div>
                        <img src={one} alt="" width="50px" height="50px" />
                    </div>
                    <h3>{userData.fname}</h3>
                </div>
                <div className="chat-board">
                    <div className="chat-left">
                        <div>
                            <img src={two} alt="" width="50px" height="50px" />
                        </div>
                        <div className="info">
                            <h3>{messages.fname}</h3>
                            <p>last seen:8:444pm</p>
                        </div>
                    </div>
                    <div className="chat-right">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="icon">
                            <i className="fas fa-video"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-bar">
                <input type="text" name="search" onChange={e => setText(e.target.value)} onKeyUp={(e)=> userSerach(e)} value="Search" />
                {conversation.map(data => {
                    <div className="chat-self">
                        <div>
                            <img src={two} alt="" width="50px" height="50px" />
                        </div>
                        <div className="chat-text">
                            <h3>{data.fname}</h3>
                            <p>{data.messages[data.messages.length - 1].text}</p>
                        </div>
                    </div>
                })}


                {/* <div className="chat-self">
                    <div>
                        <img src={one} alt="" width="50px" height="50px" />
                    </div>
                    <div className="chat-text">
                        <h3>SM Shah</h3>
                        <p>kita obsta?</p>
                    </div>
                </div>

                <div className="chat-self">
                    <div>
                        <img src={four} alt="" width="50px" height="50px" />
                    </div>
                    <div className="chat-text">
                        <h3>MM Hussain</h3>
                        <p>Vala ni?</p>
                    </div>
                </div>

                <div className="chat-self">
                    <div>
                        <img src={three} alt="" width="50px" height="50px" />
                    </div>
                    <div className="chat-text">
                        <h3>SSSSS</h3>
                        <p>Oh</p>
                    </div>
                </div> */}


            </div>
            <div className="chat">
                {messages.messages.map(data => {
                    <div className="{(data.userID == userData._id)?'self-content-right':'self-content-left'}">
                        <img src={three} alt="" width="50px" height="50px" />
                        <p>{data.text}</p>
                    </div>
                })}

                {/* <div className="self-content-right">
                    <div className="content">
                        <p>Ai tho valo.</p>
                        <img src={one} alt="" width="50px" height="50px" />
                    </div>
                </div> */}
                <div className="message row">
                    <div className="col-10">
                        <input type="text" placeholder="Write something..." />
                    </div>
                    <div className="col-2">
                        <i className="fas fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
