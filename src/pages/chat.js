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
    const [messages, setMessages] = useState([]);
    const [conversation, setconversation] = useState([]);
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState({});
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
            setMessages(data.length > 0 ? data[0].messages : [])

        })
    }, [])

    useEffect(() => {
        socket.on('message', (data) => {
            console.log(data);
            let message, self;
            console.log(userData, selectedUser)
            if (selectedUser && data.from == selectedUser.userID) {
                message = data.data;
            }
            else if (data.to == userData._id) {
                self = true;
            }
            setMessages(message ? [...messages, message] : messages);
            setconversation((message || self) ? [...conversation.filter(item => (item._id != data.conversation._id) && item.messages), data.conversation] : conversation);
            setSelectedUser(conversation[0]);
            console.log('updated message', messages, conversation)
        })
    })

    const userSearch = () => {
        let data = [];
        fetch(`/search?text=${text}`).then(res => res.json()).then(res => {
            if(res.body.length == 0){
                toast.info('No User Found', {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            console.log('res', res.body, typeof (res.body), res.body.length)
            data = res;
            console.log('data', data)
            setconversation([...conversation, ...data.body]);
            console.log('conversation', conversation, selectedUser, messages)
        })
    }

    useEffect(() => {
        userSearch()
    }, [])

    const sendMessage = (event, user) => {
        event.preventDefault();
        console.log(user, selectedUser)
        axios.post('/create-conversation', {
            from: userData._id,
            to: selectedUser.userID,
            messages: {
                text: message
            }
        }).then(res => {
            console.log('after sending message', res.data.body)
            socket.emit('pmessage', { data: res.data.body.messages[res.data.body.messages.length - 1], from: userData._id, to: selectedUser.userID, conversation: res.data.body })
            setMessages([...messages, res.data.body.messages[res.data.body.messages.length - 1]])
            let data = {
                fname:selectedUser.fname,
                lname:selectedUser.lname,
                userID:selectedUser.userID,
                mobile:selectedUser.mobile,
                email:selectedUser.email
            }
            setconversation([...conversation.filter(item => (item._id != res.data.body._id) && (item.messages)), Object.assign(res.data.body, data)]);
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
                <input type="text" name="search" onChange={e => setText(e.target.value)} onKeyPress={e => e.key === 'Enter' ? userSearch() : null} value={text} />
                {conversation.map((data, i) => (
                    <div className="chat-self" key={i}>
                        <div>
                            <img src={two} alt="" width="50px" height="50px" />
                        </div>
                        <div onClick={e => { setSelectedUser(data); setMessages(data.messages ? data.messages : messages) }} className="chat-text">
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
                {messages.map((data, i) => (
                    <div key={i} className={(data.userID == userData._id) ? 'self-content-right' : 'self-content-left'}>
                        <div className="content">
                            <p>{data.text}</p>
                            <img src={one} alt="" width="50px" height="50px" />
                        </div>

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
