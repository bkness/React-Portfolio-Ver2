import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot='bot-field' action='/'>
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" value="contact" />
        <p>
          <label>Your Name: </label>
          <input type="text" name="name" required />
        </p>
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" required />
        </p>
  
        <p>
          <label>Message: </label>
          <textarea name="message" required rows='5'></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
