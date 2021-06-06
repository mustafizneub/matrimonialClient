import React, { useState, useEffect } from 'react'
import './chat.css'
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/5.jpg';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import io from 'socket.io-client';

let socket;
const Chat = () => {
    let history = useHistory()
    const [userData, setUser] = useState({});
    const [messages, getMessages] = useState([]);
    const [conversation, setconversation] = useState([]);
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const ENDPOINT = 'localhost:3000';
    if (localStorage.getItem('user') == undefined) {
        history.push('/signin');
        toast.error('Please Login with your account', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // useState(() => {
    //     if (localStorage.getItem('user')) {

    //         getConversation();
    //     }
    // }, [])

    useEffect(() => {

        socket = io(ENDPOINT);
        console.log(socket)
        socket.emit('pmessage', 'abc')
        socket.on('message', (data) => {
            console.log(data)
        })
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [])

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        setUser(user)
        fetch(`/conversation/${user._id}`).then(res => res.json()).then(res => {
            console.log(res)
            let data = res.body;
            // setconversation([{ "_id": "60b776585e156414fcc6b7ba", "lname": "", "mobile": "", "fname": "Foyzur", "email": "foyzur.neub@gmail.com" }])
            setconversation([...conversation, ...data])
            console.log(conversation)
            setSelectedUser(data.length > 0 ? data[0] : {})
            getMessages(data.length > 0 ? data[0].messages : [])

        })
    }, [])

    useEffect(()=>{
        socket.on('message', (data) => {
            setMessage(...messages,data)
        })
    })

    const userSerach = () => {
        // let a = [{ 's': 'd' }];
        // setconversation([...conversation, "...a"])
        let data = [];
        // setconversation([...conversation,"...a"])
        fetch(`/search?text=${text}`).then(res => res.json()).then(res => {
            console.log('res', res.body, typeof (res.body), res.body.length)
            data = res;
            console.log('data', data)
            // data.concat(res.data.body)
            console.log('after', data)
            // setConversation(data)
            // console.log('data', data)
            setconversation([...conversation, ...data.body]);
            // getconversation([...conversation,'res.data.body[0]'])
            // conversation.concat(res.data.body)
            console.log('conversation', conversation, selectedUser, messages)
        })

        // console.log(conversation)
    }

    useEffect(() => {
        userSerach()
    }, [])

    // function setConversation(data) {
    //     setconversation([...data])
    //     // getconversation([...conversation,'res.data.body[0]'])
    //     // conversation.concat(res.data.body)
    //     console.log('conversation', conversation)
    // }

    const sendMessage = (event,user) => {
        event.preventDefault();
        console.log(user,selectedUser)
        axios.post('/create-conversation', {
            from: userData._id,
            to: selectedUser._id,
            messages: {
                text: message
            }
        }).then(res => {
            socket.emit('pmessage', message)
            setMessage(...messages, message)
            // if (res.data.statusCode == 200 || res.data.statusCode == 201) {
            //     messages.push(message)
            // }
        }).catch(err => {

        })

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
                {selectedUser &&
                    <div className="chat-board">
                        <div className="chat-left">
                            <div>
                                <img src={two} alt="" width="50px" height="50px" />
                            </div>
                            <div className="info">
                                <h3>{selectedUser.fname}</h3>
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
                }

            </div>
            <div className="side-bar">
                <input type="text" name="search" onChange={e => setText(e.target.value)} onKeyPress={e => e.key === 'Enter' ? userSerach() : null} value={text} />
                {conversation.map((data, index) => (
                    <div className="chat-self">
                        <div>
                            <img src={two} alt="" width="50px" height="50px" />
                        </div>
                        <div onClick={e => setSelectedUser(data)} className="chat-text">
                            <h3>{data.fname}</h3>
                            {data.messages?.length > 0 &&
                                <p>{data.messages[data.messages.length - 1].text}</p>
                            }
                        </div>
                    </div>
                ))};


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
                {messages.map((data, index) => (
                    <div className="{(data.userID == userData._id)?'self-content-right':'self-content-left'}">
                        <img src={three} alt="" width="50px" height="50px" />
                        <p>{data.text}</p>
                    </div>
                ))}

                {/* <div className="self-content-right">
                    <div className="content">
                        <p>Ai tho valo.</p>
                        <img src={one} alt="" width="50px" height="50px" />
                    </div>
                </div> */}
                <div className="message row">
                    <div className="col-10">
                        <input type="text" placeholder="Write something..." value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
                    </div>
                    <div className="col-2">
                        <button onClick={e => sendMessage(e)}>send<i className="fas fa-paper-plane"></i></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
