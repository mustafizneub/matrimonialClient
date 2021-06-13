import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./contact.css"



const ContactPage = () => {

  let history = useHistory();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact_number, setContact] = useState(null);
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);


  function submit(e) {
    e.preventDefault();
    let body = {
      name,
      email,
      contact_number,
      city,
      message
    }

    axios.post('/contact', body).then(res => {
      console.log(res)
      if (res.status == 201) {
        toast.success('Your quiry Submitted successfully', {
          position: toast.POSITION.TOP_CENTER
        })
        history.push('/')
      }
    })
  }


  return (
    <div className="contact">
      <Link to="/">
        <img className="home_logo" src="https://i.ibb.co/tHFX7BM/1245.png" /></Link>
      <div class="container">
        <form id="contact">
          <h3>Contact Us</h3>
          <h4>Contact us for any query</h4>
          <fieldset>
            <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} type="text" tabIndex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} type="email" tabIndex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" value={contact_number} onChange={(e) => setContact(e.target.value)} type="tel" tabIndex="3" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your City (optional)" value={city} onChange={(e) => setCity(e.target.value)} type="url" tabIndex="4" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." value={message} onChange={(e) => setMessage(e.target.value)} tabIndex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="button" onClick={(e) => submit(e)} id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
          <p class="copyright">Designed by <a href="#" target="_blank" title="Colorlib">Dipraj</a></p>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;

