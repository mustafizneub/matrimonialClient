import React from 'react'
import { Link } from 'react-router-dom';
import "./contact.css"



const ContactPage = () => {




  return (
    <div className="contact">
      <Link to="/">
        <img className="home_logo" src="https://i.ibb.co/tHFX7BM/1245.png" /></Link>
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>Contact Us</h3>
          <h4>Contact us for any query</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabIndex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your City (optional)" type="url" tabIndex="4" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
          <p class="copyright">Designed by <a href="#" target="_blank" title="Colorlib">RuleBreakers</a></p>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;

